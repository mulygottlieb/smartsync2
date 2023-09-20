import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GoalGeneralSettingService } from "./goalGeneralSetting.service";
import { GoalGeneralSettingControllerBase } from "./base/goalGeneralSetting.controller.base";

@swagger.ApiTags("goalGeneralSettings")
@common.Controller("goalGeneralSettings")
export class GoalGeneralSettingController extends GoalGeneralSettingControllerBase {
  constructor(protected readonly service: GoalGeneralSettingService) {
    super(service);
  }
}
