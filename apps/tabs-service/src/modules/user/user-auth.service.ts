import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UNAUTHORIZED_ERROR_MESSAGE } from '@noteable/errors-messages';
import { AuthTokensDto } from '@noteable/interfaces';

import { AuthService } from '../auth';
import { UserService } from './user.service';
import { AUTH_CONFIG } from '../../config';

@Injectable()
export class UserAuthService {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  async loginUser(credentials: {
    username: string;
    password: string;
  }): Promise<AuthTokensDto> {
    const matchingUserWithPassword = await this.userService.getByUsername(
      { username: credentials.username },
      { includePassword: true }
    );

    if (!matchingUserWithPassword)
      throw new UnauthorizedException(
        UNAUTHORIZED_ERROR_MESSAGE.USER_BY_USERNAME_NOT_FOUND
      );

    const isValidPassword = await this.authService.isValidPasswordHash(
      credentials.password,
      matchingUserWithPassword.password
    );

    if (!isValidPassword)
      throw new UnauthorizedException(
        UNAUTHORIZED_ERROR_MESSAGE.INCORRECT_LOGIN_CREDENTIALS
      );

    const tokenPayload = {
      username: matchingUserWithPassword.username,
      email: matchingUserWithPassword.email,
      role: matchingUserWithPassword.role,
    };

    return {
      user: {
        email: matchingUserWithPassword.email,
        username: matchingUserWithPassword.username,
        id: matchingUserWithPassword.id,
      },
      backendTokens: {
        expiresIn: new Date().setTime(
          new Date().getTime() + AUTH_CONFIG.ACCESS_T0KEN_TTL
        ),
        accessToken: await this.authService.getAccessTokenJwt(tokenPayload),
        refreshToken: await this.authService.getRefreshTokenJwt(tokenPayload),
      },
    };
  }

  async handleUserRefreshTokenProcess(
    refreshToken: string
  ): Promise<AuthTokensDto> {
    if (!this.authService.isValidRefreshToken(refreshToken))
      throw new UnauthorizedException(
        UNAUTHORIZED_ERROR_MESSAGE.INVALID_REFRESH_TOKEN
      );

    const prevTokenPayload = await this.authService.getRefreshTokenContent(
      refreshToken
    );

    if (!prevTokenPayload || !prevTokenPayload.username)
      throw new UnauthorizedException(
        UNAUTHORIZED_ERROR_MESSAGE.INVALID_REFRESH_TOKEN
      );

    const user = await this.userService.getByUsername(
      { username: prevTokenPayload.username },
      { includePassword: false }
    );

    if (!user)
      throw new UnauthorizedException(
        UNAUTHORIZED_ERROR_MESSAGE.INVALID_REFRESH_TOKEN
      );

    const newTokenPayload = {
      username: user.username,
      email: user.email,
      role: user.role,
    };

    return {
      user: {
        email: user.email,
        username: user.username,
        id: user.id,
      },
      backendTokens: {
        expiresIn: new Date().setTime(
          new Date().getTime() + AUTH_CONFIG.ACCESS_T0KEN_TTL
        ),
        accessToken: await this.authService.getAccessTokenJwt(newTokenPayload),
        refreshToken: await this.authService.getRefreshTokenJwt(
          newTokenPayload
        ),
      },
    };
  }
}
