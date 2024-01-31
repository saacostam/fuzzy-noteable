import {Injectable, NotFoundException} from '@nestjs/common';

import {PrismaService} from "@noteable/be-common";
import {GetSongTabsByIdDto} from "@noteable/interfaces";
import {Decade, Genre, Key, LeanSong} from "@noteable/types";

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

  async getSongTabsById(id: string): Promise<GetSongTabsByIdDto> {
    const dbSong = await this.prismaService.song.findUnique({
      where: {
        id: id,
      },
      include: {
        ...this.includeSongWithMinimalTabs,
      }
    })

    if (!dbSong) throw new NotFoundException(`Song with ${id} not found`);

    return {
      ...dbSong,
      key: dbSong.key as Key,
      decade: dbSong.decade as Decade,
      genre: dbSong.genre as Genre,
    }
  }
}
