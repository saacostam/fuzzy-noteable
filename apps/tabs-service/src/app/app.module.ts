import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TabModule, ArtistModule, SongModule, UserModule, AuthModule } from '../modules';

@Module({
  imports: [ArtistModule, SongModule, TabModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
