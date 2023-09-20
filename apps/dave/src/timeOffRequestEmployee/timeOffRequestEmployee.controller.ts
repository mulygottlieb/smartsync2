import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeOffRequestEmployeeService } from "./timeOffRequestEmployee.service";
import { TimeOffRequestEmployeeControllerBase } from "./base/timeOffRequestEmployee.controller.base";

@swagger.ApiTags("timeOffRequestEmployees")
@common.Controller("timeOffRequestEmployees")
export class TimeOffRequestEmployeeController extends TimeOffRequestEmployeeControllerBase {
  constructor(protected readonly service: TimeOffRequestEmployeeService) {
    super(service);
  }
}
