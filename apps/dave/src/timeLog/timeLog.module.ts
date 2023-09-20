import { Module } from "@nestjs/common";
import { TimeLogModuleBase } from "./base/timeLog.module.base";
import { TimeLogService } from "./timeLog.service";
import { TimeLogController } from "./timeLog.controller";
import { TimeLogResolver } from "./timeLog.resolver";

@Module({
  imports: [TimeLogModuleBase],
  controllers: [TimeLogController],
  providers: [TimeLogService, TimeLogResolver],
  exports: [TimeLogService],
})
export class TimeLogModule {}
