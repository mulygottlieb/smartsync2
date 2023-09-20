import { Module } from "@nestjs/common";
import { TagOrganizationEmploymentTypeModuleBase } from "./base/tagOrganizationEmploymentType.module.base";
import { TagOrganizationEmploymentTypeService } from "./tagOrganizationEmploymentType.service";
import { TagOrganizationEmploymentTypeController } from "./tagOrganizationEmploymentType.controller";
import { TagOrganizationEmploymentTypeResolver } from "./tagOrganizationEmploymentType.resolver";

@Module({
  imports: [TagOrganizationEmploymentTypeModuleBase],
  controllers: [TagOrganizationEmploymentTypeController],
  providers: [
    TagOrganizationEmploymentTypeService,
    TagOrganizationEmploymentTypeResolver,
  ],
  exports: [TagOrganizationEmploymentTypeService],
})
export class TagOrganizationEmploymentTypeModule {}
