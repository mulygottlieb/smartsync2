import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationContactService } from "./organizationContact.service";
import { OrganizationContactControllerBase } from "./base/organizationContact.controller.base";

@swagger.ApiTags("organizationContacts")
@common.Controller("organizationContacts")
export class OrganizationContactController extends OrganizationContactControllerBase {
  constructor(protected readonly service: OrganizationContactService) {
    super(service);
  }
}
