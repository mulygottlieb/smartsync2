import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IntegrationTenantService } from "./integrationTenant.service";
import { IntegrationTenantControllerBase } from "./base/integrationTenant.controller.base";

@swagger.ApiTags("integrationTenants")
@common.Controller("integrationTenants")
export class IntegrationTenantController extends IntegrationTenantControllerBase {
  constructor(protected readonly service: IntegrationTenantService) {
    super(service);
  }
}
