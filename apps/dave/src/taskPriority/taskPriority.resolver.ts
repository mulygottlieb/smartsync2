import * as graphql from "@nestjs/graphql";
import { TaskPriorityResolverBase } from "./base/taskPriority.resolver.base";
import { TaskPriority } from "./base/TaskPriority";
import { TaskPriorityService } from "./taskPriority.service";

@graphql.Resolver(() => TaskPriority)
export class TaskPriorityResolver extends TaskPriorityResolverBase {
  constructor(protected readonly service: TaskPriorityService) {
    super(service);
  }
}
