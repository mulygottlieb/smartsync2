import { Module } from "@nestjs/common";
import { InviteOrganizationProjectModuleBase } from "./base/inviteOrganizationProject.module.base";
import { InviteOrganizationProjectService } from "./inviteOrganizationProject.service";
import { InviteOrganizationProjectController } from "./inviteOrganizationProject.controller";
import { InviteOrganizationProjectResolver } from "./inviteOrganizationProject.resolver";

@Module({
  imports: [InviteOrganizationProjectModuleBase],
  controllers: [InviteOrganizationProjectController],
  providers: [
    InviteOrganizationProjectService,
    InviteOrganizationProjectResolver,
  ],
  exports: [InviteOrganizationProjectService],
})
export class InviteOrganizationProjectModule {}
