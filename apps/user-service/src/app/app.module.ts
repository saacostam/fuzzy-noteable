import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterController } from '../register/register.controller';
import { RegisterModule } from '../register/register.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RegisterModule,
  ],
  controllers: [
    AppController,
    RegisterController
  ],
  providers: [AppService],
})
export class AppModule {}
