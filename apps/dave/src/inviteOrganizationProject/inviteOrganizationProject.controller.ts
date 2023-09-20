import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InviteOrganizationProjectService } from "./inviteOrganizationProject.service";
import { InviteOrganizationProjectControllerBase } from "./base/inviteOrganizationProject.controller.base";

@swagger.ApiTags("inviteOrganizationProjects")
@common.Controller("inviteOrganizationProjects")
export class InviteOrganizationProjectController extends InviteOrganizationProjectControllerBase {
  constructor(protected readonly service: InviteOrganizationProjectService) {
    super(service);
  }
}
