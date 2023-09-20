import { Module } from "@nestjs/common";
import { TimeSlotMinuteModuleBase } from "./base/timeSlotMinute.module.base";
import { TimeSlotMinuteService } from "./timeSlotMinute.service";
import { TimeSlotMinuteController } from "./timeSlotMinute.controller";
import { TimeSlotMinuteResolver } from "./timeSlotMinute.resolver";

@Module({
  imports: [TimeSlotMinuteModuleBase],
  controllers: [TimeSlotMinuteController],
  providers: [TimeSlotMinuteService, TimeSlotMinuteResolver],
  exports: [TimeSlotMinuteService],
})
export class TimeSlotMinuteModule {}
