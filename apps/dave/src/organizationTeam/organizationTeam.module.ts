import { Module } from "@nestjs/common";
import { OrganizationTeamModuleBase } from "./base/organizationTeam.module.base";
import { OrganizationTeamService } from "./organizationTeam.service";
import { OrganizationTeamController } from "./organizationTeam.controller";
import { OrganizationTeamResolver } from "./organizationTeam.resolver";

@Module({
  imports: [OrganizationTeamModuleBase],
  controllers: [OrganizationTeamController],
  providers: [OrganizationTeamService, OrganizationTeamResolver],
  exports: [OrganizationTeamService],
})
export class OrganizationTeamModule {}
