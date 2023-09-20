import { Module } from "@nestjs/common";
import { EmployeeSettingModuleBase } from "./base/employeeSetting.module.base";
import { EmployeeSettingService } from "./employeeSetting.service";
import { EmployeeSettingController } from "./employeeSetting.controller";
import { EmployeeSettingResolver } from "./employeeSetting.resolver";

@Module({
  imports: [EmployeeSettingModuleBase],
  controllers: [EmployeeSettingController],
  providers: [EmployeeSettingService, EmployeeSettingResolver],
  exports: [EmployeeSettingService],
})
export class EmployeeSettingModule {}
