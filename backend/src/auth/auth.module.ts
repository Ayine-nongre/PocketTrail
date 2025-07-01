import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [UserModule, DatabaseModule, JwtModule.register({
      global: true
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard
    }
  ],
})
export class AuthModule {}
