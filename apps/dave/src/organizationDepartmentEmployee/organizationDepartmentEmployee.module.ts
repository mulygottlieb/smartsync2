import { Module } from "@nestjs/common";
import { OrganizationDepartmentEmployeeModuleBase } from "./base/organizationDepartmentEmployee.module.base";
import { OrganizationDepartmentEmployeeService } from "./organizationDepartmentEmployee.service";
import { OrganizationDepartmentEmployeeController } from "./organizationDepartmentEmployee.controller";
import { OrganizationDepartmentEmployeeResolver } from "./organizationDepartmentEmployee.resolver";

@Module({
  imports: [OrganizationDepartmentEmployeeModuleBase],
  controllers: [OrganizationDepartmentEmployeeController],
  providers: [
    OrganizationDepartmentEmployeeService,
    OrganizationDepartmentEmployeeResolver,
  ],
  exports: [OrganizationDepartmentEmployeeService],
})
export class OrganizationDepartmentEmployeeModule {}
