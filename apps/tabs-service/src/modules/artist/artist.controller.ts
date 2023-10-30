import {Param, Controller, Get, Body, Post} from '@nestjs/common';

import { ArtistService } from "./artist.service";
import {CreateArtistDto} from "./dto";

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService){}

  @Get('/')
  getAllArtists(){
    return this.artistService.getArtists();
  }

  @Get('/:id/songs')
  getArtistSongsById(@Param('id') tabId: string) {
    return this.artistService.getArtistSongsById(tabId);
  }

  @Post('/')
  createArtist(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.createArtist(createArtistDto.artist);
  }
}
