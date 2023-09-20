import { Module } from "@nestjs/common";
import { GoalTemplateModuleBase } from "./base/goalTemplate.module.base";
import { GoalTemplateService } from "./goalTemplate.service";
import { GoalTemplateController } from "./goalTemplate.controller";
import { GoalTemplateResolver } from "./goalTemplate.resolver";

@Module({
  imports: [GoalTemplateModuleBase],
  controllers: [GoalTemplateController],
  providers: [GoalTemplateService, GoalTemplateResolver],
  exports: [GoalTemplateService],
})
export class GoalTemplateModule {}
