import * as graphql from "@nestjs/graphql";
import { OrganizationTeamTasksTaskResolverBase } from "./base/organizationTeamTasksTask.resolver.base";
import { OrganizationTeamTasksTask } from "./base/OrganizationTeamTasksTask";
import { OrganizationTeamTasksTaskService } from "./organizationTeamTasksTask.service";

@graphql.Resolver(() => OrganizationTeamTasksTask)
export class OrganizationTeamTasksTaskResolver extends OrganizationTeamTasksTaskResolverBase {
  constructor(protected readonly service: OrganizationTeamTasksTaskService) {
    super(service);
  }
}
