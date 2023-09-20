import { Module } from "@nestjs/common";
import { OrganizationProjectEmployeeModuleBase } from "./base/organizationProjectEmployee.module.base";
import { OrganizationProjectEmployeeService } from "./organizationProjectEmployee.service";
import { OrganizationProjectEmployeeController } from "./organizationProjectEmployee.controller";
import { OrganizationProjectEmployeeResolver } from "./organizationProjectEmployee.resolver";

@Module({
  imports: [OrganizationProjectEmployeeModuleBase],
  controllers: [OrganizationProjectEmployeeController],
  providers: [
    OrganizationProjectEmployeeService,
    OrganizationProjectEmployeeResolver,
  ],
  exports: [OrganizationProjectEmployeeService],
})
export class OrganizationProjectEmployeeModule {}
