import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeAwardService } from "./employeeAward.service";
import { EmployeeAwardControllerBase } from "./base/employeeAward.controller.base";

@swagger.ApiTags("employeeAwards")
@common.Controller("employeeAwards")
export class EmployeeAwardController extends EmployeeAwardControllerBase {
  constructor(protected readonly service: EmployeeAwardService) {
    super(service);
  }
}
