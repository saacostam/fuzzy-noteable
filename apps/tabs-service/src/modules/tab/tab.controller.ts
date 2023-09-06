import {Param, Controller, Get} from '@nestjs/common';

import { TabService } from "./tab.service";

@Controller('music-unit')
export class TabController {
  constructor(private readonly tabService: TabService){}

  @Get(':id')
  getData(@Param('id') userId: string) {
    return this.tabService.getTabById(userId);
  }
}
