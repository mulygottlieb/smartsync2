import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationTeamTasksTaskService } from "./organizationTeamTasksTask.service";
import { OrganizationTeamTasksTaskControllerBase } from "./base/organizationTeamTasksTask.controller.base";

@swagger.ApiTags("organizationTeamTasksTasks")
@common.Controller("organizationTeamTasksTasks")
export class OrganizationTeamTasksTaskController extends OrganizationTeamTasksTaskControllerBase {
  constructor(protected readonly service: OrganizationTeamTasksTaskService) {
    super(service);
  }
}
