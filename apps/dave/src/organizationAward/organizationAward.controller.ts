import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationAwardService } from "./organizationAward.service";
import { OrganizationAwardControllerBase } from "./base/organizationAward.controller.base";

@swagger.ApiTags("organizationAwards")
@common.Controller("organizationAwards")
export class OrganizationAwardController extends OrganizationAwardControllerBase {
  constructor(protected readonly service: OrganizationAwardService) {
    super(service);
  }
}
