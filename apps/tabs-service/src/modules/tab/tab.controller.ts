import {Param, Controller, Get, Post, Body} from '@nestjs/common';

import { TabService } from "./tab.service";
import {CreateTabDto} from "./dto";

@Controller('tab')
export class TabController {
  constructor(private readonly tabService: TabService){}

  @Get(':id')
  getData(@Param('id') tabId: string) {
    return this.tabService.getTabById(tabId);
  }

  @Post('/')
  createTab(@Body() createTabDto: CreateTabDto){
    return this.tabService.createTab(createTabDto.tab, createTabDto.songID);
  }
}
