import { Module } from '@nestjs/common';

import { UsersService } from './user.service';
import { usersProvider } from './user.provider';
import { DatabaseModule } from '../../database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    UsersService,
    ...usersProvider,
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}