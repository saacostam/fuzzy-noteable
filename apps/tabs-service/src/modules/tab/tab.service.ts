import { Injectable } from '@nestjs/common';
import {PrismaService} from "@noteable/be-common";

@Injectable()
export class TabService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTabById(id: string){
    return this.prismaService.tablature.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        source: true,
        difficulty: true,
        tuning: true,
        transposition: true,
        type: true,
        musicUnits: true,
        song: {
          select: {
            id: true,
            name: true,
            key: true,
            bpm: true,
            artists: {
              select: {
                name: true,
                id: true,
              }
            }
          }
        }
      }
    })
  }
}

