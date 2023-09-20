import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationSprintService } from "./organizationSprint.service";
import { OrganizationSprintControllerBase } from "./base/organizationSprint.controller.base";

@swagger.ApiTags("organizationSprints")
@common.Controller("organizationSprints")
export class OrganizationSprintController extends OrganizationSprintControllerBase {
  constructor(protected readonly service: OrganizationSprintService) {
    super(service);
  }
}
