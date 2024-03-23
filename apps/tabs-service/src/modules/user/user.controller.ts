import { Body, Controller, Post } from '@nestjs/common';

import {
  RegisterUserDto,
  LoginUserDto,
  RefreshTokenDto,
} from '@noteable/interfaces';

import { UserService } from './user.service';
import { UserAuthService } from './user-auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userAuthService: UserAuthService
  ) {}

  @Post('/register')
  registerUser(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.registerUser({
      username: registerUserDto.username,
      email: registerUserDto.email,
      plaintTextPassword: registerUserDto.password,
    });
  }

  @Post('/login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.userAuthService.loginUser({
      username: loginUserDto.username,
      password: loginUserDto.password,
    });
  }

  @Post('/refresh-token')
  refreshToken(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.userAuthService.handleUserRefreshTokenProcess(
      refreshTokenDto.refreshToken
    );
  }
}
