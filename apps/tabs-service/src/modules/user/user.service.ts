import { ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt'

import { PrismaService } from '@noteable/be-common';
import { AuthService } from '../auth';
import { AUTH_CONFIG } from '../../config';
import { BaseUser } from '@noteable/types';

@Injectable()
export class UserService {
    constructor(
        private prismaService: PrismaService,
        private authService: AuthService,
    ){}

    async registerUser(newUser: {username: string, email: string, password: string}): Promise<BaseUser>{
        const userThatMightAlreadyExists = this.getByUsernameOrEmail({username: newUser.username, email: newUser.email});

        if (userThatMightAlreadyExists){
            throw new ConflictException('Email is already in use');
        }

        const hashedPassword = await hash(newUser.password, AUTH_CONFIG.SALT_ROUNDS);

        const newlyCreatedUser = await this.create({
            username: newUser.username,
            email: newUser.email,
            hashedPassword: hashedPassword,
        });

        return {
            username: newlyCreatedUser.username,
            email: newlyCreatedUser.email,
            role: newlyCreatedUser.role,
        }
    }

    async create(newUser: { username: string, email: string, hashedPassword: string}): Promise<BaseUser>{
        return this.prismaService.user.create({
            data: {
                username: newUser.username,
                email: newUser.email,
                password: newUser.hashedPassword,
                role: 'client',
            }
        })
    }

    async getByUsernameOrEmail(query: {username: string, email: string}){
        return this.prismaService.user.findFirst({
            where: {
                email: query.email,
                username: query.username,
            }
        })
    }
}
