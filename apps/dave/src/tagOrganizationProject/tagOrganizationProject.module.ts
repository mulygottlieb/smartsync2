import { Module } from "@nestjs/common";
import { TagOrganizationProjectModuleBase } from "./base/tagOrganizationProject.module.base";
import { TagOrganizationProjectService } from "./tagOrganizationProject.service";
import { TagOrganizationProjectController } from "./tagOrganizationProject.controller";
import { TagOrganizationProjectResolver } from "./tagOrganizationProject.resolver";

@Module({
  imports: [TagOrganizationProjectModuleBase],
  controllers: [TagOrganizationProjectController],
  providers: [TagOrganizationProjectService, TagOrganizationProjectResolver],
  exports: [TagOrganizationProjectService],
})
export class TagOrganizationProjectModule {}
