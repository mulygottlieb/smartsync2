import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TimesheetService } from "./timesheet.service";
import { TimesheetControllerBase } from "./base/timesheet.controller.base";

@swagger.ApiTags("timesheets")
@common.Controller("timesheets")
export class TimesheetController extends TimesheetControllerBase {
  constructor(protected readonly service: TimesheetService) {
    super(service);
  }
}
