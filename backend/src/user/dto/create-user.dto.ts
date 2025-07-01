import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    @ApiProperty({ example: "John Doe", description: "Name of user"})
    @IsString({message: "Name should be a string"})
    @IsNotEmpty({message: "Name should not be empty"})
    name: string

    @ApiProperty({ example: "test@example.com", description: "Email of user"})
    @IsString({message: "Email should be a string"})
    @IsNotEmpty({message: "Email should not be empty"})
    @IsEmail({}, {message: "Email should be a valid email address"})
    email: string;

    @ApiProperty({ example: "Password@$12", description: "Password of user"})
    @IsString({message: "Password should be a string"})
    @IsNotEmpty({message: "Password should not be empty"})
    password: string;
};