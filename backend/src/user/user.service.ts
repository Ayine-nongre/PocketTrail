import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @Inject('DATA_SOURCE') private dataSource: DataSource
    ){}

    private userRepository = this.dataSource.getRepository(User);

    async createUser(user: CreateUserDto): Promise<User> {
        try {
            const existingUser = await this.userRepository.findOneBy({ email: user.email })

            if (existingUser) throw new ConflictException("User with this email already exist")
            
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;

            const newUser = this.userRepository.create(user);
            return await this.userRepository.save(newUser);
        } catch (err) {
            throw err;
        }
    }
}
