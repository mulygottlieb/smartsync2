import { Module } from "@nestjs/common";
import { OrganizationProjectModuleBase } from "./base/organizationProject.module.base";
import { OrganizationProjectService } from "./organizationProject.service";
import { OrganizationProjectController } from "./organizationProject.controller";
import { OrganizationProjectResolver } from "./organizationProject.resolver";

@Module({
  imports: [OrganizationProjectModuleBase],
  controllers: [OrganizationProjectController],
  providers: [OrganizationProjectService, OrganizationProjectResolver],
  exports: [OrganizationProjectService],
})
export class OrganizationProjectModule {}
