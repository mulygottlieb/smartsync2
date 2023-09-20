import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationMapService } from "./integrationMap.service";
import { IntegrationMapControllerBase } from "./base/integrationMap.controller.base";

@swagger.ApiTags("integrationMaps")
@common.Controller("integrationMaps")
export class IntegrationMapController extends IntegrationMapControllerBase {
  constructor(protected readonly service: IntegrationMapService) {
    super(service);
  }
}
