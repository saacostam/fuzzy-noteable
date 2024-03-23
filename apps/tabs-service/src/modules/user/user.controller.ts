import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto, LoginUserDto } from '@noteable/interfaces';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('/register')
    registerUser(@Body() registerUserDto: RegisterUserDto){
        return this.userService.registerUser({
            username: registerUserDto.username,
            email: registerUserDto.email,
            plaintTextPassword: registerUserDto.password,
        })
    }

    @Post('/login')
    loginUser(@Body() loginUserDto: LoginUserDto){
        return this.userService.loginUser({
            username: loginUserDto.username,
            password: loginUserDto.password,
        })
    }
}
