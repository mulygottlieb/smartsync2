import { Module } from "@nestjs/common";
import { EmployeePhoneModuleBase } from "./base/employeePhone.module.base";
import { EmployeePhoneService } from "./employeePhone.service";
import { EmployeePhoneController } from "./employeePhone.controller";
import { EmployeePhoneResolver } from "./employeePhone.resolver";

@Module({
  imports: [EmployeePhoneModuleBase],
  controllers: [EmployeePhoneController],
  providers: [EmployeePhoneService, EmployeePhoneResolver],
  exports: [EmployeePhoneService],
})
export class EmployeePhoneModule {}
