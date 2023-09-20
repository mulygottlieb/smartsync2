import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeOffPolicyEmployeeService } from "./timeOffPolicyEmployee.service";
import { TimeOffPolicyEmployeeControllerBase } from "./base/timeOffPolicyEmployee.controller.base";

@swagger.ApiTags("timeOffPolicyEmployees")
@common.Controller("timeOffPolicyEmployees")
export class TimeOffPolicyEmployeeController extends TimeOffPolicyEmployeeControllerBase {
  constructor(protected readonly service: TimeOffPolicyEmployeeService) {
    super(service);
  }
}
