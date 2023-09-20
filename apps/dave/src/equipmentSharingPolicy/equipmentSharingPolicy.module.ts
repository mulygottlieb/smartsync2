import { Module } from "@nestjs/common";
import { EquipmentSharingPolicyModuleBase } from "./base/equipmentSharingPolicy.module.base";
import { EquipmentSharingPolicyService } from "./equipmentSharingPolicy.service";
import { EquipmentSharingPolicyController } from "./equipmentSharingPolicy.controller";
import { EquipmentSharingPolicyResolver } from "./equipmentSharingPolicy.resolver";

@Module({
  imports: [EquipmentSharingPolicyModuleBase],
  controllers: [EquipmentSharingPolicyController],
  providers: [EquipmentSharingPolicyService, EquipmentSharingPolicyResolver],
  exports: [EquipmentSharingPolicyService],
})
export class EquipmentSharingPolicyModule {}
