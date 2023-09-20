import * as graphql from "@nestjs/graphql";
import { TaskRelatedIssueTypeResolverBase } from "./base/taskRelatedIssueType.resolver.base";
import { TaskRelatedIssueType } from "./base/TaskRelatedIssueType";
import { TaskRelatedIssueTypeService } from "./taskRelatedIssueType.service";

@graphql.Resolver(() => TaskRelatedIssueType)
export class TaskRelatedIssueTypeResolver extends TaskRelatedIssueTypeResolverBase {
  constructor(protected readonly service: TaskRelatedIssueTypeService) {
    super(service);
  }
}
