import { Module } from "@nestjs/common";
import { EmployeeLevelModuleBase } from "./base/employeeLevel.module.base";
import { EmployeeLevelService } from "./employeeLevel.service";
import { EmployeeLevelController } from "./employeeLevel.controller";
import { EmployeeLevelResolver } from "./employeeLevel.resolver";

@Module({
  imports: [EmployeeLevelModuleBase],
  controllers: [EmployeeLevelController],
  providers: [EmployeeLevelService, EmployeeLevelResolver],
  exports: [EmployeeLevelService],
})
export class EmployeeLevelModule {}
