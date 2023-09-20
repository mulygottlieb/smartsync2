import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagTaskService } from "./tagTask.service";
import { TagTaskControllerBase } from "./base/tagTask.controller.base";

@swagger.ApiTags("tagTasks")
@common.Controller("tagTasks")
export class TagTaskController extends TagTaskControllerBase {
  constructor(protected readonly service: TagTaskService) {
    super(service);
  }
}
