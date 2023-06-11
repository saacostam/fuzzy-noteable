import { Body, Controller, Get, Post } from '@nestjs/common';
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

    @Get()
    async getUsers(){
        return this.registerService.getUsers();
    }
}
