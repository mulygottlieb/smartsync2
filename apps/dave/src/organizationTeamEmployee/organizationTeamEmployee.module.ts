import { Module } from "@nestjs/common";
import { OrganizationTeamEmployeeModuleBase } from "./base/organizationTeamEmployee.module.base";
import { OrganizationTeamEmployeeService } from "./organizationTeamEmployee.service";
import { OrganizationTeamEmployeeController } from "./organizationTeamEmployee.controller";
import { OrganizationTeamEmployeeResolver } from "./organizationTeamEmployee.resolver";

@Module({
  imports: [OrganizationTeamEmployeeModuleBase],
  controllers: [OrganizationTeamEmployeeController],
  providers: [
    OrganizationTeamEmployeeService,
    OrganizationTeamEmployeeResolver,
  ],
  exports: [OrganizationTeamEmployeeService],
})
export class OrganizationTeamEmployeeModule {}
