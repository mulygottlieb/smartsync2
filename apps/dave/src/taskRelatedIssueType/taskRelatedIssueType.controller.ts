import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskRelatedIssueTypeService } from "./taskRelatedIssueType.service";
import { TaskRelatedIssueTypeControllerBase } from "./base/taskRelatedIssueType.controller.base";

@swagger.ApiTags("taskRelatedIssueTypes")
@common.Controller("taskRelatedIssueTypes")
export class TaskRelatedIssueTypeController extends TaskRelatedIssueTypeControllerBase {
  constructor(protected readonly service: TaskRelatedIssueTypeService) {
    super(service);
  }
}
