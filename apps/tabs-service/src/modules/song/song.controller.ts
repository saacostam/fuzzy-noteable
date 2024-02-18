import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { SongService } from './song.service';
import { CreateSongDto } from '@noteable/interfaces';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('/:id/tabs')
  getSongTabsById(@Param('id') songId: string) {
    return this.songService.getSongTabsById(songId);
  }

  @Post('/')
  createSong(@Body() createSongDto: CreateSongDto) {
    return this.songService.createSong(
      createSongDto.song,
      createSongDto.artistsIDs
    );
  }
}
