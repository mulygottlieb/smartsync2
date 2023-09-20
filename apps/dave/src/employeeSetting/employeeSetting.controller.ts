import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeSettingService } from "./employeeSetting.service";
import { EmployeeSettingControllerBase } from "./base/employeeSetting.controller.base";

@swagger.ApiTags("employeeSettings")
@common.Controller("employeeSettings")
export class EmployeeSettingController extends EmployeeSettingControllerBase {
  constructor(protected readonly service: EmployeeSettingService) {
    super(service);
  }
}
