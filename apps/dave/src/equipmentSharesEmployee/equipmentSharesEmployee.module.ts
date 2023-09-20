import { Module } from "@nestjs/common";
import { EquipmentSharesEmployeeModuleBase } from "./base/equipmentSharesEmployee.module.base";
import { EquipmentSharesEmployeeService } from "./equipmentSharesEmployee.service";
import { EquipmentSharesEmployeeController } from "./equipmentSharesEmployee.controller";
import { EquipmentSharesEmployeeResolver } from "./equipmentSharesEmployee.resolver";

@Module({
  imports: [EquipmentSharesEmployeeModuleBase],
  controllers: [EquipmentSharesEmployeeController],
  providers: [EquipmentSharesEmployeeService, EquipmentSharesEmployeeResolver],
  exports: [EquipmentSharesEmployeeService],
})
export class EquipmentSharesEmployeeModule {}
