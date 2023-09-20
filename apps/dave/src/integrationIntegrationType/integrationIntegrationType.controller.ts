import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationIntegrationTypeService } from "./integrationIntegrationType.service";
import { IntegrationIntegrationTypeControllerBase } from "./base/integrationIntegrationType.controller.base";

@swagger.ApiTags("integrationIntegrationTypes")
@common.Controller("integrationIntegrationTypes")
export class IntegrationIntegrationTypeController extends IntegrationIntegrationTypeControllerBase {
  constructor(protected readonly service: IntegrationIntegrationTypeService) {
    super(service);
  }
}
