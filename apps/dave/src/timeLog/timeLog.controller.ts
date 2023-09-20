import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimeLogService } from "./timeLog.service";
import { TimeLogControllerBase } from "./base/timeLog.controller.base";

@swagger.ApiTags("timeLogs")
@common.Controller("timeLogs")
export class TimeLogController extends TimeLogControllerBase {
  constructor(protected readonly service: TimeLogService) {
    super(service);
  }
}
