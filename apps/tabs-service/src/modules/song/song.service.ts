import { Injectable } from '@nestjs/common';
import {PrismaService} from "@noteable/be-common";
import {LeanSong} from "@noteable/types";

@Injectable()
export class SongService {
  constructor(private readonly prismaService: PrismaService) {}
  
  async createSong(song: LeanSong, artistsIDs: string[]){
    return this.prismaService.song.create({
      data: {
        ...song,
        artistsIDs: artistsIDs
      }
    })
  }
}
