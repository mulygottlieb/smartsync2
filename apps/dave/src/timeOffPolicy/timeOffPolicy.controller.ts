import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeOffPolicyService } from "./timeOffPolicy.service";
import { TimeOffPolicyControllerBase } from "./base/timeOffPolicy.controller.base";

@swagger.ApiTags("timeOffPolicies")
@common.Controller("timeOffPolicies")
export class TimeOffPolicyController extends TimeOffPolicyControllerBase {
  constructor(protected readonly service: TimeOffPolicyService) {
    super(service);
  }
}
