import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeLevelService } from "./employeeLevel.service";
import { EmployeeLevelControllerBase } from "./base/employeeLevel.controller.base";

@swagger.ApiTags("employeeLevels")
@common.Controller("employeeLevels")
export class EmployeeLevelController extends EmployeeLevelControllerBase {
  constructor(protected readonly service: EmployeeLevelService) {
    super(service);
  }
}
