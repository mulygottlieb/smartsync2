import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeTasksTaskService } from "./employeeTasksTask.service";
import { EmployeeTasksTaskControllerBase } from "./base/employeeTasksTask.controller.base";

@swagger.ApiTags("employeeTasksTasks")
@common.Controller("employeeTasksTasks")
export class EmployeeTasksTaskController extends EmployeeTasksTaskControllerBase {
  constructor(protected readonly service: EmployeeTasksTaskService) {
    super(service);
  }
}
