import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationEntitySettingService } from "./integrationEntitySetting.service";
import { IntegrationEntitySettingControllerBase } from "./base/integrationEntitySetting.controller.base";

@swagger.ApiTags("integrationEntitySettings")
@common.Controller("integrationEntitySettings")
export class IntegrationEntitySettingController extends IntegrationEntitySettingControllerBase {
  constructor(protected readonly service: IntegrationEntitySettingService) {
    super(service);
  }
}
