import { Module } from "@nestjs/common";
import { TagOrganizationModuleBase } from "./base/tagOrganization.module.base";
import { TagOrganizationService } from "./tagOrganization.service";
import { TagOrganizationController } from "./tagOrganization.controller";
import { TagOrganizationResolver } from "./tagOrganization.resolver";

@Module({
  imports: [TagOrganizationModuleBase],
  controllers: [TagOrganizationController],
  providers: [TagOrganizationService, TagOrganizationResolver],
  exports: [TagOrganizationService],
})
export class TagOrganizationModule {}
