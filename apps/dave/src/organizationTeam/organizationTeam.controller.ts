import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationTeamService } from "./organizationTeam.service";
import { OrganizationTeamControllerBase } from "./base/organizationTeam.controller.base";

@swagger.ApiTags("organizationTeams")
@common.Controller("organizationTeams")
export class OrganizationTeamController extends OrganizationTeamControllerBase {
  constructor(protected readonly service: OrganizationTeamService) {
    super(service);
  }
}
