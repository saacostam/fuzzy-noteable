import { Module } from '@nestjs/common';
import {PrismaModule} from "@noteable/be-common";
import {SeedService} from "./seed.service";
import {SeedController} from "./seed.controller";

@Module({
  imports: [ PrismaModule ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
