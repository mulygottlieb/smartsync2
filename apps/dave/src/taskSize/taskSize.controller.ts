import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskSizeService } from "./taskSize.service";
import { TaskSizeControllerBase } from "./base/taskSize.controller.base";

@swagger.ApiTags("taskSizes")
@common.Controller("taskSizes")
export class TaskSizeController extends TaskSizeControllerBase {
  constructor(protected readonly service: TaskSizeService) {
    super(service);
  }
}
