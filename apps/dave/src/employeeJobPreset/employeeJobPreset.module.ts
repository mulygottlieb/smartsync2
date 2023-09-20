import { Module } from "@nestjs/common";
import { EmployeeJobPresetModuleBase } from "./base/employeeJobPreset.module.base";
import { EmployeeJobPresetService } from "./employeeJobPreset.service";
import { EmployeeJobPresetController } from "./employeeJobPreset.controller";
import { EmployeeJobPresetResolver } from "./employeeJobPreset.resolver";

@Module({
  imports: [EmployeeJobPresetModuleBase],
  controllers: [EmployeeJobPresetController],
  providers: [EmployeeJobPresetService, EmployeeJobPresetResolver],
  exports: [EmployeeJobPresetService],
})
export class EmployeeJobPresetModule {}
