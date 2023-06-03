import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateUserDto } from '@noteable/db';

@Controller('register')
export class RegisterController {
    constructor(
        private readonly registerService: RegisterService
    ){}

    @Post()
    async register(@Body() registerUserDto: CreateUserDto){
        return this.registerService.registerUser(registerUserDto);
    }
}
