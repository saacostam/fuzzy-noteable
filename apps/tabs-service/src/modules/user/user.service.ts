import { ConflictException, Injectable } from '@nestjs/common';

import { PrismaService } from '@noteable/be-common';
import {
  CONFLICT_ERROR_MESSAGE,
  UNAUTHORIZED_ERROR_MESSAGE,
} from '@noteable/errors-messages';
import { BaseUser } from '@noteable/types';

import { AuthService } from '../auth';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService
  ) {}

  async registerUser(newUser: {
    username: string;
    email: string;
    plaintTextPassword: string;
  }): Promise<BaseUser> {
    const userThatMightAlreadyExists = await this.getByUsernameOrEmail(
      { username: newUser.username, email: newUser.email },
      { includePassword: false }
    );

    if (userThatMightAlreadyExists) {
      if (userThatMightAlreadyExists.email === newUser.email)
        throw new ConflictException(
          CONFLICT_ERROR_MESSAGE.EMAIL_ALREADY_IN_USE
        );
      if (userThatMightAlreadyExists.username === newUser.username)
        throw new ConflictException(
          CONFLICT_ERROR_MESSAGE.USERNAME_ALREADY_IN_USE
        );
    }

    const hashedPassword = await this.authService.hashPasword(
      newUser.plaintTextPassword
    );

    const newlyCreatedUser = await this.create({
      username: newUser.username,
      email: newUser.email,
      hashedPassword: hashedPassword,
    });

    return {
      username: newlyCreatedUser.username,
      email: newlyCreatedUser.email,
      role: newlyCreatedUser.role,
    };
  }

  async create(newUser: {
    username: string;
    email: string;
    hashedPassword: string;
  }): Promise<BaseUser> {
    return this.prismaService.user.create({
      data: {
        username: newUser.username,
        email: newUser.email,
        password: newUser.hashedPassword,
        role: 'client',
      },
    });
  }

  async getByUsernameOrEmail(
    query: { username: string; email: string },
    options: { includePassword: boolean }
  ) {
    return this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            email: query.email,
          },
          {
            username: query.username,
          }
        ]
      },
      select: {
        username: true,
        email: true,
        role: true,
        ...(options.includePassword
          ? {
              password: true,
            }
          : undefined),
      },
    });
  }

  public async getByUsername(
    query: { username: string },
    options: { includePassword: boolean }
  ) {
    return this.prismaService.user.findFirst({
      where: {
        username: query.username,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        ...(options.includePassword
          ? {
              password: true,
            }
          : undefined),
      },
    });
  }
}
