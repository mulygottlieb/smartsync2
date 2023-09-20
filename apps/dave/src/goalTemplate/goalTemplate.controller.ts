import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoalTemplateService } from "./goalTemplate.service";
import { GoalTemplateControllerBase } from "./base/goalTemplate.controller.base";

@swagger.ApiTags("goalTemplates")
@common.Controller("goalTemplates")
export class GoalTemplateController extends GoalTemplateControllerBase {
  constructor(protected readonly service: GoalTemplateService) {
    super(service);
  }
}
