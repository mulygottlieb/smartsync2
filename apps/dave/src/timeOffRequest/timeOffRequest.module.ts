import { Module } from "@nestjs/common";
import { TimeOffRequestModuleBase } from "./base/timeOffRequest.module.base";
import { TimeOffRequestService } from "./timeOffRequest.service";
import { TimeOffRequestController } from "./timeOffRequest.controller";
import { TimeOffRequestResolver } from "./timeOffRequest.resolver";

@Module({
  imports: [TimeOffRequestModuleBase],
  controllers: [TimeOffRequestController],
  providers: [TimeOffRequestService, TimeOffRequestResolver],
  exports: [TimeOffRequestService],
})
export class TimeOffRequestModule {}
