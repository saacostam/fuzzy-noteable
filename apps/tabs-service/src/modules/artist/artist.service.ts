import { Injectable } from '@nestjs/common';
import {PrismaService} from "@noteable/be-common";
import {LeanArtist} from "@noteable/types";

@Injectable()
export class ArtistService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly includeArtistWithMinimalSongs = {
    songs: {
      select: {
        id: true,
        name: true,
      }
    }
  }

  async getArtistSongsById(id: string){
    return this.prismaService.artist.findUnique({
      where: {
        id,
      },
      include: {
        ...this.includeArtistWithMinimalSongs,
      }
    })
  }

  async getArtists(){
    return this.prismaService.artist.findMany({
      select: {
        id: true,
        name: true,
      }
    });
  }

  async createArtist(artist: LeanArtist){
    return this.prismaService.artist.create({
      data: {
        ...artist,
      },
    })
  }
}
