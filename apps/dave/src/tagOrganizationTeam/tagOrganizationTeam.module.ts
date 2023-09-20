import { Module } from "@nestjs/common";
import { TagOrganizationTeamModuleBase } from "./base/tagOrganizationTeam.module.base";
import { TagOrganizationTeamService } from "./tagOrganizationTeam.service";
import { TagOrganizationTeamController } from "./tagOrganizationTeam.controller";
import { TagOrganizationTeamResolver } from "./tagOrganizationTeam.resolver";

@Module({
  imports: [TagOrganizationTeamModuleBase],
  controllers: [TagOrganizationTeamController],
  providers: [TagOrganizationTeamService, TagOrganizationTeamResolver],
  exports: [TagOrganizationTeamService],
})
export class TagOrganizationTeamModule {}
