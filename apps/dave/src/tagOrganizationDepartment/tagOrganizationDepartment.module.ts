import { Module } from "@nestjs/common";
import { TagOrganizationDepartmentModuleBase } from "./base/tagOrganizationDepartment.module.base";
import { TagOrganizationDepartmentService } from "./tagOrganizationDepartment.service";
import { TagOrganizationDepartmentController } from "./tagOrganizationDepartment.controller";
import { TagOrganizationDepartmentResolver } from "./tagOrganizationDepartment.resolver";

@Module({
  imports: [TagOrganizationDepartmentModuleBase],
  controllers: [TagOrganizationDepartmentController],
  providers: [
    TagOrganizationDepartmentService,
    TagOrganizationDepartmentResolver,
  ],
  exports: [TagOrganizationDepartmentService],
})
export class TagOrganizationDepartmentModule {}
