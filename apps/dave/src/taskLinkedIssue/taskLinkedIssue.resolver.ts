import * as graphql from "@nestjs/graphql";
import { TaskLinkedIssueResolverBase } from "./base/taskLinkedIssue.resolver.base";
import { TaskLinkedIssue } from "./base/TaskLinkedIssue";
import { TaskLinkedIssueService } from "./taskLinkedIssue.service";

@graphql.Resolver(() => TaskLinkedIssue)
export class TaskLinkedIssueResolver extends TaskLinkedIssueResolverBase {
  constructor(protected readonly service: TaskLinkedIssueService) {
    super(service);
  }
}
