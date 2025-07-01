import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import * as createUserDto from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { DataSource, Not } from 'typeorm';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @Inject(UserService) private userService: UserService,
        @Inject('DATA_SOURCE') private dataSource: DataSource,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) { }

    private userRepository = this.dataSource.getRepository(User);

    private async generateToken(user: User): Promise<[string, string]> {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({ userId: user.id }, 
                { expiresIn: '15m', secret: this.configService.get<string>('JWT_SECRET_KEY') }),
            this.jwtService.signAsync({ userId: user.id }, 
                { expiresIn: '7d', secret: this.configService.get<string>('JWT_SECRET_KEY')  })
        ])

        return [accessToken, refreshToken];
    }

    async signup(user: createUserDto.CreateUserDto): Promise<any> {
        try {
            const newUser = await this.userService.createUser(user);

            const [accessToken, refreshToken] = await this.generateToken(newUser);
            newUser.refreshToken = refreshToken;
            await this.userRepository.save(newUser);

            return { 
                returnedUser: plainToInstance(User, newUser), 
                accessToken, 
                refreshToken
            };
        }
        catch (err) {
            throw err;
        }
    }

    async login(user: LoginDto): Promise<any> {
        try {
            const foundUser = await this.userRepository.findOneBy({ email: user.email });
            if (!foundUser) throw new BadRequestException('Incorrect email or password');

            const isPasswordValid = await bcrypt.compare(user.password, foundUser.password);
            if (!isPasswordValid) throw new BadRequestException('Incorrect email or password');

            const [accessToken, refreshToken] = await this.generateToken(foundUser);
            foundUser.refreshToken = refreshToken;
            await this.userRepository.save(foundUser);

            return { 
                returnedUser: plainToInstance(User, foundUser), 
                accessToken, 
                refreshToken
            };
        }
        catch (err) {
            throw err;
        }
    }

    async logout(id: number): Promise<any> {
        try {
            const foundUser = await this.userRepository.findOneBy({ id })
            if (!foundUser) throw new NotFoundException('User does not exist')

            foundUser.refreshToken = ''
            await this.userRepository.save(foundUser)

            return
        }
        catch (err) {
            throw err
        }
    }
}
