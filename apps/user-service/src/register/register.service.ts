import { BadRequestException, Injectable } from '@nestjs/common';
import { PasswordHashUtil } from '@noteable/be-utils';
import { CreateUserDto, User, UsersService } from '@noteable/db';
@Injectable()
export class RegisterService {
    constructor(
        private readonly userService: UsersService,
    ){}

    async registerUser(registerUserDto: CreateUserDto): Promise<User>{
        const { email, username, password } = registerUserDto;

        const existingUser = await this.userService.findOne({
            $or:[
                {email},
                {username}
            ]
        });

        if (existingUser?.username === username) throw new BadRequestException('This username is already in use.');
        if (existingUser?.email === email) throw new BadRequestException('This email is already in use');

        const hashedPassword = await PasswordHashUtil.hash(password);

        const user = this.userService.create({
            username,
            email,
            password: hashedPassword
        })

        return user;
    }
}
