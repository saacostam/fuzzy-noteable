import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TabModule } from "../modules";

@Module({
  imports: [TabModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
