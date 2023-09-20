import { Module } from "@nestjs/common";
import { OrganizationTeamTasksTaskModuleBase } from "./base/organizationTeamTasksTask.module.base";
import { OrganizationTeamTasksTaskService } from "./organizationTeamTasksTask.service";
import { OrganizationTeamTasksTaskController } from "./organizationTeamTasksTask.controller";
import { OrganizationTeamTasksTaskResolver } from "./organizationTeamTasksTask.resolver";

@Module({
  imports: [OrganizationTeamTasksTaskModuleBase],
  controllers: [OrganizationTeamTasksTaskController],
  providers: [
    OrganizationTeamTasksTaskService,
    OrganizationTeamTasksTaskResolver,
  ],
  exports: [OrganizationTeamTasksTaskService],
})
export class OrganizationTeamTasksTaskModule {}
