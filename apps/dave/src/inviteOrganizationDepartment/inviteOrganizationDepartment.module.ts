import { Module } from "@nestjs/common";
import { InviteOrganizationDepartmentModuleBase } from "./base/inviteOrganizationDepartment.module.base";
import { InviteOrganizationDepartmentService } from "./inviteOrganizationDepartment.service";
import { InviteOrganizationDepartmentController } from "./inviteOrganizationDepartment.controller";
import { InviteOrganizationDepartmentResolver } from "./inviteOrganizationDepartment.resolver";

@Module({
  imports: [InviteOrganizationDepartmentModuleBase],
  controllers: [InviteOrganizationDepartmentController],
  providers: [
    InviteOrganizationDepartmentService,
    InviteOrganizationDepartmentResolver,
  ],
  exports: [InviteOrganizationDepartmentService],
})
export class InviteOrganizationDepartmentModule {}
