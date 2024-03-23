import { Module } from '@nestjs/common';

import { PrismaModule } from '@noteable/be-common';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserAuthService } from './user-auth.service';
import { AuthModule } from '../auth';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UserController],
  providers: [UserService, UserAuthService],
})
export class UserModule {}
 