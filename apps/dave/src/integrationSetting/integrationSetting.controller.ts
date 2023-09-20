import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationSettingService } from "./integrationSetting.service";
import { IntegrationSettingControllerBase } from "./base/integrationSetting.controller.base";

@swagger.ApiTags("integrationSettings")
@common.Controller("integrationSettings")
export class IntegrationSettingController extends IntegrationSettingControllerBase {
  constructor(protected readonly service: IntegrationSettingService) {
    super(service);
  }
}
