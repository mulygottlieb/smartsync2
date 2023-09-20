import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeSlotTimeLogService } from "./timeSlotTimeLog.service";
import { TimeSlotTimeLogControllerBase } from "./base/timeSlotTimeLog.controller.base";

@swagger.ApiTags("timeSlotTimeLogs")
@common.Controller("timeSlotTimeLogs")
export class TimeSlotTimeLogController extends TimeSlotTimeLogControllerBase {
  constructor(protected readonly service: TimeSlotTimeLogService) {
    super(service);
  }
}
