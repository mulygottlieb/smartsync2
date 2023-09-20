import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskVersionService } from "./taskVersion.service";
import { TaskVersionControllerBase } from "./base/taskVersion.controller.base";

@swagger.ApiTags("taskVersions")
@common.Controller("taskVersions")
export class TaskVersionController extends TaskVersionControllerBase {
  constructor(protected readonly service: TaskVersionService) {
    super(service);
  }
}
