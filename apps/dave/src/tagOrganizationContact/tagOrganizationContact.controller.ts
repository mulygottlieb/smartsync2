import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationContactService } from "./tagOrganizationContact.service";
import { TagOrganizationContactControllerBase } from "./base/tagOrganizationContact.controller.base";

@swagger.ApiTags("tagOrganizationContacts")
@common.Controller("tagOrganizationContacts")
export class TagOrganizationContactController extends TagOrganizationContactControllerBase {
  constructor(protected readonly service: TagOrganizationContactService) {
    super(service);
  }
}
