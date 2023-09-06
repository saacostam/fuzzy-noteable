import { Injectable } from '@nestjs/common';
import {PrismaService} from "@noteable/be-common";

@Injectable()
export class TabService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTabById(id: string){
    return this.prismaService.tablature.findUnique({
      where: {
        id,
      }
    })
  }
}
