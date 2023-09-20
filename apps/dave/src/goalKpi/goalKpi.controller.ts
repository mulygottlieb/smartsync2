import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoalKpiService } from "./goalKpi.service";
import { GoalKpiControllerBase } from "./base/goalKpi.controller.base";

@swagger.ApiTags("goalKpis")
@common.Controller("goalKpis")
export class GoalKpiController extends GoalKpiControllerBase {
  constructor(protected readonly service: GoalKpiService) {
    super(service);
  }
}
