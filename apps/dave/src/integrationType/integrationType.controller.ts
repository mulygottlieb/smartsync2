import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationTypeService } from "./integrationType.service";
import { IntegrationTypeControllerBase } from "./base/integrationType.controller.base";

@swagger.ApiTags("integrationTypes")
@common.Controller("integrationTypes")
export class IntegrationTypeController extends IntegrationTypeControllerBase {
  constructor(protected readonly service: IntegrationTypeService) {
    super(service);
  }
}
