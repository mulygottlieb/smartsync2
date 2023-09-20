import { Module } from "@nestjs/common";
import { GoalGeneralSettingModuleBase } from "./base/goalGeneralSetting.module.base";
import { GoalGeneralSettingService } from "./goalGeneralSetting.service";
import { GoalGeneralSettingController } from "./goalGeneralSetting.controller";
import { GoalGeneralSettingResolver } from "./goalGeneralSetting.resolver";

@Module({
  imports: [GoalGeneralSettingModuleBase],
  controllers: [GoalGeneralSettingController],
  providers: [GoalGeneralSettingService, GoalGeneralSettingResolver],
  exports: [GoalGeneralSettingService],
})
export class GoalGeneralSettingModule {}
