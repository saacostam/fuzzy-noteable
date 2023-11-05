import { Injectable } from '@nestjs/common';
import {PrismaService} from "@noteable/be-common";
import {LeanTablature} from "@noteable/types";
import {ADMIN_USER_DB_ID} from "../../constants-paremeters";
import {Prisma} from "@prisma/client";

@Injectable()
export class TabService {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly selectAllTab = {
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

  async getTabById(id: string){
    return this.prismaService.tablature.findUnique({
      where: {
        id,
      },
      select: {
        ...this.selectAllTab,
      }
    })
  }

  async createTab(tab: LeanTablature, songID: string){
    return this.prismaService.tablature.create({
      data: {
        ...tab,
        musicUnits: (tab.musicUnits as Prisma.JsonValue),
        user: {
          connect: {
            id: ADMIN_USER_DB_ID,
          },
        },
        song: {
          connect: {
            id: songID,
          }
        }
      }
    })
  }
}

