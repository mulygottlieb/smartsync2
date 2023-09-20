import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationPositionService } from "./organizationPosition.service";
import { OrganizationPositionControllerBase } from "./base/organizationPosition.controller.base";

@swagger.ApiTags("organizationPositions")
@common.Controller("organizationPositions")
export class OrganizationPositionController extends OrganizationPositionControllerBase {
  constructor(protected readonly service: OrganizationPositionService) {
    super(service);
  }
}
