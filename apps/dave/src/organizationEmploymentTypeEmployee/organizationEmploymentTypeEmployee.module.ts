import { Module } from "@nestjs/common";
import { OrganizationEmploymentTypeEmployeeModuleBase } from "./base/organizationEmploymentTypeEmployee.module.base";
import { OrganizationEmploymentTypeEmployeeService } from "./organizationEmploymentTypeEmployee.service";
import { OrganizationEmploymentTypeEmployeeController } from "./organizationEmploymentTypeEmployee.controller";
import { OrganizationEmploymentTypeEmployeeResolver } from "./organizationEmploymentTypeEmployee.resolver";

@Module({
  imports: [OrganizationEmploymentTypeEmployeeModuleBase],
  controllers: [OrganizationEmploymentTypeEmployeeController],
  providers: [
    OrganizationEmploymentTypeEmployeeService,
    OrganizationEmploymentTypeEmployeeResolver,
  ],
  exports: [OrganizationEmploymentTypeEmployeeService],
})
export class OrganizationEmploymentTypeEmployeeModule {}
