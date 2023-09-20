import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationEntitySettingTiedService } from "./integrationEntitySettingTied.service";
import { IntegrationEntitySettingTiedControllerBase } from "./base/integrationEntitySettingTied.controller.base";

@swagger.ApiTags("integrationEntitySettingTieds")
@common.Controller("integrationEntitySettingTieds")
export class IntegrationEntitySettingTiedController extends IntegrationEntitySettingTiedControllerBase {
  constructor(protected readonly service: IntegrationEntitySettingTiedService) {
    super(service);
  }
}
