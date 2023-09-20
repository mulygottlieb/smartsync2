import * as graphql from "@nestjs/graphql";
import { TaskSizeResolverBase } from "./base/taskSize.resolver.base";
import { TaskSize } from "./base/TaskSize";
import { TaskSizeService } from "./taskSize.service";

@graphql.Resolver(() => TaskSize)
export class TaskSizeResolver extends TaskSizeResolverBase {
  constructor(protected readonly service: TaskSizeService) {
    super(service);
  }
}
