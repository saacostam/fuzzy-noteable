import { Param, Controller, Get, Post, Body } from '@nestjs/common';

import { CreateTabDto } from '@noteable/interfaces';

import { TabService } from './tab.service';

@Controller('tab')
export class TabController {
  constructor(private readonly tabService: TabService) {}

  @Get(':id')
  getData(@Param('id') tabId: string) {
    return this.tabService.getTabById(tabId);
  }

  @Get('/')
  getAllTabs() {
    return this.tabService.getAllTabs();
  }

  @Post('/')
  createTab(@Body() createTabDto: CreateTabDto) {
    return this.tabService.createTab(createTabDto.tab, createTabDto.songID);
  }
}
