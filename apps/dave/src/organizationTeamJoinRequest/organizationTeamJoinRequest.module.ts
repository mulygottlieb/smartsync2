import { Module } from "@nestjs/common";
import { OrganizationTeamJoinRequestModuleBase } from "./base/organizationTeamJoinRequest.module.base";
import { OrganizationTeamJoinRequestService } from "./organizationTeamJoinRequest.service";
import { OrganizationTeamJoinRequestController } from "./organizationTeamJoinRequest.controller";
import { OrganizationTeamJoinRequestResolver } from "./organizationTeamJoinRequest.resolver";

@Module({
  imports: [OrganizationTeamJoinRequestModuleBase],
  controllers: [OrganizationTeamJoinRequestController],
  providers: [
    OrganizationTeamJoinRequestService,
    OrganizationTeamJoinRequestResolver,
  ],
  exports: [OrganizationTeamJoinRequestService],
})
export class OrganizationTeamJoinRequestModule {}
