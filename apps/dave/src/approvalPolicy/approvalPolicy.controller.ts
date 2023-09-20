import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApprovalPolicyService } from "./approvalPolicy.service";
import { ApprovalPolicyControllerBase } from "./base/approvalPolicy.controller.base";

@swagger.ApiTags("approvalPolicies")
@common.Controller("approvalPolicies")
export class ApprovalPolicyController extends ApprovalPolicyControllerBase {
  constructor(protected readonly service: ApprovalPolicyService) {
    super(service);
  }
}
