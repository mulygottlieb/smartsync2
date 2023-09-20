import { Module } from "@nestjs/common";
import { OrganizationSprintModuleBase } from "./base/organizationSprint.module.base";
import { OrganizationSprintService } from "./organizationSprint.service";
import { OrganizationSprintController } from "./organizationSprint.controller";
import { OrganizationSprintResolver } from "./organizationSprint.resolver";

@Module({
  imports: [OrganizationSprintModuleBase],
  controllers: [OrganizationSprintController],
  providers: [OrganizationSprintService, OrganizationSprintResolver],
  exports: [OrganizationSprintService],
})
export class OrganizationSprintModule {}
