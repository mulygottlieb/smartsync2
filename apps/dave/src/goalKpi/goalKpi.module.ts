import { Module } from "@nestjs/common";
import { GoalKpiModuleBase } from "./base/goalKpi.module.base";
import { GoalKpiService } from "./goalKpi.service";
import { GoalKpiController } from "./goalKpi.controller";
import { GoalKpiResolver } from "./goalKpi.resolver";

@Module({
  imports: [GoalKpiModuleBase],
  controllers: [GoalKpiController],
  providers: [GoalKpiService, GoalKpiResolver],
  exports: [GoalKpiService],
})
export class GoalKpiModule {}
