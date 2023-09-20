import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskLinkedIssueService } from "./taskLinkedIssue.service";
import { TaskLinkedIssueControllerBase } from "./base/taskLinkedIssue.controller.base";

@swagger.ApiTags("taskLinkedIssues")
@common.Controller("taskLinkedIssues")
export class TaskLinkedIssueController extends TaskLinkedIssueControllerBase {
  constructor(protected readonly service: TaskLinkedIssueService) {
    super(service);
  }
}
