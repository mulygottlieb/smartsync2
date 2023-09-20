import * as graphql from "@nestjs/graphql";
import { TagTaskResolverBase } from "./base/tagTask.resolver.base";
import { TagTask } from "./base/TagTask";
import { TagTaskService } from "./tagTask.service";

@graphql.Resolver(() => TagTask)
export class TagTaskResolver extends TagTaskResolverBase {
  constructor(protected readonly service: TagTaskService) {
    super(service);
  }
}
