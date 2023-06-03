import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}