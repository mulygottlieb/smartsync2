import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoalTimeFrameService } from "./goalTimeFrame.service";
import { GoalTimeFrameControllerBase } from "./base/goalTimeFrame.controller.base";

@swagger.ApiTags("goalTimeFrames")
@common.Controller("goalTimeFrames")
export class GoalTimeFrameController extends GoalTimeFrameControllerBase {
  constructor(protected readonly service: GoalTimeFrameService) {
    super(service);
  }
}
