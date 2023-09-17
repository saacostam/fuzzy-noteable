import {Param, Controller, Get} from '@nestjs/common';

import { TabService } from "./tab.service";

@Controller('tab')
export class TabController {
  constructor(private readonly tabService: TabService){}

  @Get(':id')
  getData(@Param('id') tabId: string) {
    return this.tabService.getTabById(tabId);
  }
}
