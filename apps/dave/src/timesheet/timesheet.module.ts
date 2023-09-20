import { Module } from "@nestjs/common";
import { TimesheetModuleBase } from "./base/timesheet.module.base";
import { TimesheetService } from "./timesheet.service";
import { TimesheetController } from "./timesheet.controller";
import { TimesheetResolver } from "./timesheet.resolver";

@Module({
  imports: [TimesheetModuleBase],
  controllers: [TimesheetController],
  providers: [TimesheetService, TimesheetResolver],
  exports: [TimesheetService],
})
export class TimesheetModule {}
