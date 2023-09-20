import * as graphql from "@nestjs/graphql";
import { TaskTeamResolverBase } from "./base/taskTeam.resolver.base";
import { TaskTeam } from "./base/TaskTeam";
import { TaskTeamService } from "./taskTeam.service";

@graphql.Resolver(() => TaskTeam)
export class TaskTeamResolver extends TaskTeamResolverBase {
  constructor(protected readonly service: TaskTeamService) {
    super(service);
  }
}
