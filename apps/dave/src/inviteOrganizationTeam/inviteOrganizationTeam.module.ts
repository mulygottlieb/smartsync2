import { Module } from "@nestjs/common";
import { InviteOrganizationTeamModuleBase } from "./base/inviteOrganizationTeam.module.base";
import { InviteOrganizationTeamService } from "./inviteOrganizationTeam.service";
import { InviteOrganizationTeamController } from "./inviteOrganizationTeam.controller";
import { InviteOrganizationTeamResolver } from "./inviteOrganizationTeam.resolver";

@Module({
  imports: [InviteOrganizationTeamModuleBase],
  controllers: [InviteOrganizationTeamController],
  providers: [InviteOrganizationTeamService, InviteOrganizationTeamResolver],
  exports: [InviteOrganizationTeamService],
})
export class InviteOrganizationTeamModule {}
