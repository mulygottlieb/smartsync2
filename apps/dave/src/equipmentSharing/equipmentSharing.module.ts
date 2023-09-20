import { Module } from "@nestjs/common";
import { EquipmentSharingModuleBase } from "./base/equipmentSharing.module.base";
import { EquipmentSharingService } from "./equipmentSharing.service";
import { EquipmentSharingController } from "./equipmentSharing.controller";
import { EquipmentSharingResolver } from "./equipmentSharing.resolver";

@Module({
  imports: [EquipmentSharingModuleBase],
  controllers: [EquipmentSharingController],
  providers: [EquipmentSharingService, EquipmentSharingResolver],
  exports: [EquipmentSharingService],
})
export class EquipmentSharingModule {}
