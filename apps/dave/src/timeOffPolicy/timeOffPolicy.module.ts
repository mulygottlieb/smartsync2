import { Module } from "@nestjs/common";
import { TimeOffPolicyModuleBase } from "./base/timeOffPolicy.module.base";
import { TimeOffPolicyService } from "./timeOffPolicy.service";
import { TimeOffPolicyController } from "./timeOffPolicy.controller";
import { TimeOffPolicyResolver } from "./timeOffPolicy.resolver";

@Module({
  imports: [TimeOffPolicyModuleBase],
  controllers: [TimeOffPolicyController],
  providers: [TimeOffPolicyService, TimeOffPolicyResolver],
  exports: [TimeOffPolicyService],
})
export class TimeOffPolicyModule {}
