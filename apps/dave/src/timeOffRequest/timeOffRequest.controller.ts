import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeOffRequestService } from "./timeOffRequest.service";
import { TimeOffRequestControllerBase } from "./base/timeOffRequest.controller.base";

@swagger.ApiTags("timeOffRequests")
@common.Controller("timeOffRequests")
export class TimeOffRequestController extends TimeOffRequestControllerBase {
  constructor(protected readonly service: TimeOffRequestService) {
    super(service);
  }
}
