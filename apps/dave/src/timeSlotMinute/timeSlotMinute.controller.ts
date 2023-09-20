import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeSlotMinuteService } from "./timeSlotMinute.service";
import { TimeSlotMinuteControllerBase } from "./base/timeSlotMinute.controller.base";

@swagger.ApiTags("timeSlotMinutes")
@common.Controller("timeSlotMinutes")
export class TimeSlotMinuteController extends TimeSlotMinuteControllerBase {
  constructor(protected readonly service: TimeSlotMinuteService) {
    super(service);
  }
}
