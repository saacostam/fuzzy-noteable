import { Module } from '@nestjs/common';
import { TabController } from './tab.controller';
import { TabService } from './tab.service';
import { PrismaModule } from '@noteable/be-common';

@Module({
  imports: [PrismaModule],
  controllers: [TabController],
  providers: [TabService],
})
export class TabModule {}
