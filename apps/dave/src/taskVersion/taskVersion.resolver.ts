import * as graphql from "@nestjs/graphql";
import { TaskVersionResolverBase } from "./base/taskVersion.resolver.base";
import { TaskVersion } from "./base/TaskVersion";
import { TaskVersionService } from "./taskVersion.service";

@graphql.Resolver(() => TaskVersion)
export class TaskVersionResolver extends TaskVersionResolverBase {
  constructor(protected readonly service: TaskVersionService) {
    super(service);
  }
}
