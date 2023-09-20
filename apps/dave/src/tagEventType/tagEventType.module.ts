import { Module } from "@nestjs/common";
import { TagEventTypeModuleBase } from "./base/tagEventType.module.base";
import { TagEventTypeService } from "./tagEventType.service";
import { TagEventTypeController } from "./tagEventType.controller";
import { TagEventTypeResolver } from "./tagEventType.resolver";

@Module({
  imports: [TagEventTypeModuleBase],
  controllers: [TagEventTypeController],
  providers: [TagEventTypeService, TagEventTypeResolver],
  exports: [TagEventTypeService],
})
export class TagEventTypeModule {}
