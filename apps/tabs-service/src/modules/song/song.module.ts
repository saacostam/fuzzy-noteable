import { PrismaModule } from '@noteable/be-common';
import { Module } from '@nestjs/common';

import { SongController } from './song.controller';
import { SongService } from './song.service';

@Module({
  imports: [PrismaModule],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
