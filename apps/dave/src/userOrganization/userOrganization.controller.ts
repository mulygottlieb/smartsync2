import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserOrganizationService } from "./userOrganization.service";
import { UserOrganizationControllerBase } from "./base/userOrganization.controller.base";

@swagger.ApiTags("userOrganizations")
@common.Controller("userOrganizations")
export class UserOrganizationController extends UserOrganizationControllerBase {
  constructor(protected readonly service: UserOrganizationService) {
    super(service);
  }
}
