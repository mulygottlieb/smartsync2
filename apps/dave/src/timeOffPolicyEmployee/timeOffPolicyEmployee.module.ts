import { Module } from "@nestjs/common";
import { TimeOffPolicyEmployeeModuleBase } from "./base/timeOffPolicyEmployee.module.base";
import { TimeOffPolicyEmployeeService } from "./timeOffPolicyEmployee.service";
import { TimeOffPolicyEmployeeController } from "./timeOffPolicyEmployee.controller";
import { TimeOffPolicyEmployeeResolver } from "./timeOffPolicyEmployee.resolver";

@Module({
  imports: [TimeOffPolicyEmployeeModuleBase],
  controllers: [TimeOffPolicyEmployeeController],
  providers: [TimeOffPolicyEmployeeService, TimeOffPolicyEmployeeResolver],
  exports: [TimeOffPolicyEmployeeService],
})
export class TimeOffPolicyEmployeeModule {}
