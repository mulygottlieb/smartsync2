import { Module } from "@nestjs/common";
import { TagEquipmentModuleBase } from "./base/tagEquipment.module.base";
import { TagEquipmentService } from "./tagEquipment.service";
import { TagEquipmentController } from "./tagEquipment.controller";
import { TagEquipmentResolver } from "./tagEquipment.resolver";

@Module({
  imports: [TagEquipmentModuleBase],
  controllers: [TagEquipmentController],
  providers: [TagEquipmentService, TagEquipmentResolver],
  exports: [TagEquipmentService],
})
export class TagEquipmentModule {}
