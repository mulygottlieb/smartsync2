import { Module } from "@nestjs/common";
import { TimeOffRequestEmployeeModuleBase } from "./base/timeOffRequestEmployee.module.base";
import { TimeOffRequestEmployeeService } from "./timeOffRequestEmployee.service";
import { TimeOffRequestEmployeeController } from "./timeOffRequestEmployee.controller";
import { TimeOffRequestEmployeeResolver } from "./timeOffRequestEmployee.resolver";

@Module({
  imports: [TimeOffRequestEmployeeModuleBase],
  controllers: [TimeOffRequestEmployeeController],
  providers: [TimeOffRequestEmployeeService, TimeOffRequestEmployeeResolver],
  exports: [TimeOffRequestEmployeeService],
})
export class TimeOffRequestEmployeeModule {}
