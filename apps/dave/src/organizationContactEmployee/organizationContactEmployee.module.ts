import { Module } from "@nestjs/common";
import { OrganizationContactEmployeeModuleBase } from "./base/organizationContactEmployee.module.base";
import { OrganizationContactEmployeeService } from "./organizationContactEmployee.service";
import { OrganizationContactEmployeeController } from "./organizationContactEmployee.controller";
import { OrganizationContactEmployeeResolver } from "./organizationContactEmployee.resolver";

@Module({
  imports: [OrganizationContactEmployeeModuleBase],
  controllers: [OrganizationContactEmployeeController],
  providers: [
    OrganizationContactEmployeeService,
    OrganizationContactEmployeeResolver,
  ],
  exports: [OrganizationContactEmployeeService],
})
export class OrganizationContactEmployeeModule {}
