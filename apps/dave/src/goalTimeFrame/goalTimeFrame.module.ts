import { Module } from "@nestjs/common";
import { GoalTimeFrameModuleBase } from "./base/goalTimeFrame.module.base";
import { GoalTimeFrameService } from "./goalTimeFrame.service";
import { GoalTimeFrameController } from "./goalTimeFrame.controller";
import { GoalTimeFrameResolver } from "./goalTimeFrame.resolver";

@Module({
  imports: [GoalTimeFrameModuleBase],
  controllers: [GoalTimeFrameController],
  providers: [GoalTimeFrameService, GoalTimeFrameResolver],
  exports: [GoalTimeFrameService],
})
export class GoalTimeFrameModule {}
