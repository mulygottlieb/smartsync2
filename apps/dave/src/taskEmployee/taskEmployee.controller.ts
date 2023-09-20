import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskEmployeeService } from "./taskEmployee.service";
import { TaskEmployeeControllerBase } from "./base/taskEmployee.controller.base";

@swagger.ApiTags("taskEmployees")
@common.Controller("taskEmployees")
export class TaskEmployeeController extends TaskEmployeeControllerBase {
  constructor(protected readonly service: TaskEmployeeService) {
    super(service);
  }
}
