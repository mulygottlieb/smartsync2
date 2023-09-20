import { Module } from "@nestjs/common";
import { EmployeeAwardModuleBase } from "./base/employeeAward.module.base";
import { EmployeeAwardService } from "./employeeAward.service";
import { EmployeeAwardController } from "./employeeAward.controller";
import { EmployeeAwardResolver } from "./employeeAward.resolver";

@Module({
  imports: [EmployeeAwardModuleBase],
  controllers: [EmployeeAwardController],
  providers: [EmployeeAwardService, EmployeeAwardResolver],
  exports: [EmployeeAwardService],
})
export class EmployeeAwardModule {}
