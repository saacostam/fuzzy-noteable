import { hash, compare } from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AUTH_CONFIG } from '../../config';
import { AuthTokenPayload } from './auth.type';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async hashPasword(plaintTextPassword: string): Promise<string> {
    return hash(plaintTextPassword, AUTH_CONFIG.SALT_ROUNDS);
  }

  async isValidPasswordHash(
    plaintTextPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return compare(plaintTextPassword, hashedPassword);
  }

  async getAccessTokenJwt(payload: AuthTokenPayload) {
    return this.jwtService.signAsync(payload, {
      expiresIn: AUTH_CONFIG.ACCESS_TOKEN_EXPIRES_IN,
      secret: AUTH_CONFIG.ACCESS_TOKEN_SECRET,
    });
  }

  async getRefreshTokenJwt(payload: AuthTokenPayload) {
    return this.jwtService.signAsync(payload, {
      expiresIn: AUTH_CONFIG.REFRESH_TOKEN_EXPIRES_IN,
      secret: AUTH_CONFIG.REFRESH_TOKEN_SECRET,
    });
  }

  async isValidRefreshToken(refreshToken: string) {
    this.jwtService.verifyAsync(refreshToken, {
      secret: AUTH_CONFIG.REFRESH_TOKEN_SECRET,
    });
  }

  async getRefreshTokenContent(
    refreshToken: string
  ): Promise<AuthTokenPayload> {
    return this.jwtService.decode(refreshToken);
  }
}
