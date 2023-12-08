import { Injectable } from '@nestjs/common';
import {PrismaService} from "@noteable/be-common";
import {LeanSong} from "@noteable/types";

@Injectable()
export class SongService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly includeSongWithMinimalTabs = {
    tablatures: {
      select: {
        id: true,
      }
    }
  }

  async createSong(song: LeanSong, artistsIDs: string[]){
    return this.prismaService.song.create({
      data: {
        ...song,
        artists: {
          connect: artistsIDs.map((id) => ({
            id: id,
          })),
        }
      }
    })
  }

  async getSongTabsById(id: string){
    return this.prismaService.song.findUnique({
      where: {
        id: id,
      },
      include: {
        ...this.includeSongWithMinimalTabs,
      }
    })
  }
}
