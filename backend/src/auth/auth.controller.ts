import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SignUpResponseDto } from './dto/sign-up-response.dto';
import { Public } from './auth.constants';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject(AuthService) private authService: AuthService
    ) {}

    @Public()
    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: "Endpoint to sign a user up"})
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, description: 'User successfully created', type: SignUpResponseDto })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    async signup(@Body() data: CreateUserDto): Promise<SignUpResponseDto> {
        try{
            const { returnedUser, accessToken, refreshToken } = await this.authService.signup(data)
            
            return {
                statusCode: HttpStatus.CREATED,
                message: 'User created successfully',
                data: returnedUser,
                accessToken,
                refreshToken
            }
        }
        catch(err) {
            throw err;
        }
    }

    @Public()
    @Post('login')
    @UsePipes(new ValidationPipe({ transform: true }))
    @ApiOperation({ summary: "Endpoint to log a user in"})
    @ApiBody({ type: LoginDto })
    @ApiResponse({ status: 201, description: 'User logged in successfully', type: SignUpResponseDto })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    async login(data: LoginDto): Promise<SignUpResponseDto> {
       try{
            const { returnedUser, accessToken, refreshToken } = await this.authService.login(data)
            
            return {
                statusCode: HttpStatus.OK,
                message: 'User logged in successfully',
                data: returnedUser,
                accessToken,
                refreshToken
            }
        }
        catch(err) {
            throw err;
        }
    }

    @Get('logout')
    @ApiOperation({ summary: "Endpoint to log a user in"})
    @ApiBody({ type: LoginDto })
    @ApiResponse({ status: 201, description: 'User logged in successfully', type: SignUpResponseDto })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    async logout(@Req() req: Request) {
        try {
            const user = req['user']
            await this.authService.logout(user.id)

            return {
                statusCode: HttpStatus.OK,
                message: "Logged user out successfully"
            }
        } catch (err) {
            throw err
        }
    }
}
