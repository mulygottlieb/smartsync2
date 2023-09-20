import { Module } from "@nestjs/common";
import { TimeSlotTimeLogModuleBase } from "./base/timeSlotTimeLog.module.base";
import { TimeSlotTimeLogService } from "./timeSlotTimeLog.service";
import { TimeSlotTimeLogController } from "./timeSlotTimeLog.controller";
import { TimeSlotTimeLogResolver } from "./timeSlotTimeLog.resolver";

@Module({
  imports: [TimeSlotTimeLogModuleBase],
  controllers: [TimeSlotTimeLogController],
  providers: [TimeSlotTimeLogService, TimeSlotTimeLogResolver],
  exports: [TimeSlotTimeLogService],
})
export class TimeSlotTimeLogModule {}
