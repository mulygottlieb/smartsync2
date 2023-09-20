import { Module } from "@nestjs/common";
import { GoalKpiTemplateModuleBase } from "./base/goalKpiTemplate.module.base";
import { GoalKpiTemplateService } from "./goalKpiTemplate.service";
import { GoalKpiTemplateController } from "./goalKpiTemplate.controller";
import { GoalKpiTemplateResolver } from "./goalKpiTemplate.resolver";

@Module({
  imports: [GoalKpiTemplateModuleBase],
  controllers: [GoalKpiTemplateController],
  providers: [GoalKpiTemplateService, GoalKpiTemplateResolver],
  exports: [GoalKpiTemplateService],
})
export class GoalKpiTemplateModule {}
