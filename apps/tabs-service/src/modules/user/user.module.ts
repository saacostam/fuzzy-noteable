import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '@noteable/be-common';
import { AuthService } from '../auth';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, AuthService],
})
export class UserModule {}
