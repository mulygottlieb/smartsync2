import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InviteOrganizationTeamService } from "./inviteOrganizationTeam.service";
import { InviteOrganizationTeamControllerBase } from "./base/inviteOrganizationTeam.controller.base";

@swagger.ApiTags("inviteOrganizationTeams")
@common.Controller("inviteOrganizationTeams")
export class InviteOrganizationTeamController extends InviteOrganizationTeamControllerBase {
  constructor(protected readonly service: InviteOrganizationTeamService) {
    super(service);
  }
}
