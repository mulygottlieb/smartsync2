import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskPriorityService } from "./taskPriority.service";
import { TaskPriorityControllerBase } from "./base/taskPriority.controller.base";

@swagger.ApiTags("taskPriorities")
@common.Controller("taskPriorities")
export class TaskPriorityController extends TaskPriorityControllerBase {
  constructor(protected readonly service: TaskPriorityService) {
    super(service);
  }
}
