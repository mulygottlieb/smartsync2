import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationTeamService } from "./tagOrganizationTeam.service";
import { TagOrganizationTeamControllerBase } from "./base/tagOrganizationTeam.controller.base";

@swagger.ApiTags("tagOrganizationTeams")
@common.Controller("tagOrganizationTeams")
export class TagOrganizationTeamController extends TagOrganizationTeamControllerBase {
  constructor(protected readonly service: TagOrganizationTeamService) {
    super(service);
  }
}
