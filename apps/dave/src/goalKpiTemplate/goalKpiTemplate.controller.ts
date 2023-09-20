import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoalKpiTemplateService } from "./goalKpiTemplate.service";
import { GoalKpiTemplateControllerBase } from "./base/goalKpiTemplate.controller.base";

@swagger.ApiTags("goalKpiTemplates")
@common.Controller("goalKpiTemplates")
export class GoalKpiTemplateController extends GoalKpiTemplateControllerBase {
  constructor(protected readonly service: GoalKpiTemplateService) {
    super(service);
  }
}
