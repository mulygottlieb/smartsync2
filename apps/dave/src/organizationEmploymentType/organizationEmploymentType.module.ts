import { Module } from "@nestjs/common";
import { OrganizationEmploymentTypeModuleBase } from "./base/organizationEmploymentType.module.base";
import { OrganizationEmploymentTypeService } from "./organizationEmploymentType.service";
import { OrganizationEmploymentTypeController } from "./organizationEmploymentType.controller";
import { OrganizationEmploymentTypeResolver } from "./organizationEmploymentType.resolver";

@Module({
  imports: [OrganizationEmploymentTypeModuleBase],
  controllers: [OrganizationEmploymentTypeController],
  providers: [
    OrganizationEmploymentTypeService,
    OrganizationEmploymentTypeResolver,
  ],
  exports: [OrganizationEmploymentTypeService],
})
export class OrganizationEmploymentTypeModule {}
