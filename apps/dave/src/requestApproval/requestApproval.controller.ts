import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestApprovalService } from "./requestApproval.service";
import { RequestApprovalControllerBase } from "./base/requestApproval.controller.base";

@swagger.ApiTags("requestApprovals")
@common.Controller("requestApprovals")
export class RequestApprovalController extends RequestApprovalControllerBase {
  constructor(protected readonly service: RequestApprovalService) {
    super(service);
  }
}
