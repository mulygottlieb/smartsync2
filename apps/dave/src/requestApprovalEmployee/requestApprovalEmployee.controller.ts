import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestApprovalEmployeeService } from "./requestApprovalEmployee.service";
import { RequestApprovalEmployeeControllerBase } from "./base/requestApprovalEmployee.controller.base";

@swagger.ApiTags("requestApprovalEmployees")
@common.Controller("requestApprovalEmployees")
export class RequestApprovalEmployeeController extends RequestApprovalEmployeeControllerBase {
  constructor(protected readonly service: RequestApprovalEmployeeService) {
    super(service);
  }
}
