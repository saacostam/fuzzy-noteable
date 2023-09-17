import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TabModule, SeedModule } from "../modules";

@Module({
  imports: [TabModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
