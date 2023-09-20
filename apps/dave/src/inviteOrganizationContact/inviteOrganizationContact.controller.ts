import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InviteOrganizationContactService } from "./inviteOrganizationContact.service";
import { InviteOrganizationContactControllerBase } from "./base/inviteOrganizationContact.controller.base";

@swagger.ApiTags("inviteOrganizationContacts")
@common.Controller("inviteOrganizationContacts")
export class InviteOrganizationContactController extends InviteOrganizationContactControllerBase {
  constructor(protected readonly service: InviteOrganizationContactService) {
    super(service);
  }
}
