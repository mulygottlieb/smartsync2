import { Module } from "@nestjs/common";
import { OrganizationDepartmentModuleBase } from "./base/organizationDepartment.module.base";
import { OrganizationDepartmentService } from "./organizationDepartment.service";
import { OrganizationDepartmentController } from "./organizationDepartment.controller";
import { OrganizationDepartmentResolver } from "./organizationDepartment.resolver";

@Module({
  imports: [OrganizationDepartmentModuleBase],
  controllers: [OrganizationDepartmentController],
  providers: [OrganizationDepartmentService, OrganizationDepartmentResolver],
  exports: [OrganizationDepartmentService],
})
export class OrganizationDepartmentModule {}
