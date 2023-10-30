import {Controller, Post, Body} from '@nestjs/common';
import {SongService} from "./song.service";
import {CreateSongDto} from "./dto";

@Controller('song')
export class SongController{
  constructor(private readonly songService: SongService){}

  @Post('/')
  createSong(@Body() createSongDto: CreateSongDto) {
    return this.songService.createSong(createSongDto.song, createSongDto.artistsIDs);
  }
}
