import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationTeamJoinRequestService } from "./organizationTeamJoinRequest.service";
import { OrganizationTeamJoinRequestControllerBase } from "./base/organizationTeamJoinRequest.controller.base";

@swagger.ApiTags("organizationTeamJoinRequests")
@common.Controller("organizationTeamJoinRequests")
export class OrganizationTeamJoinRequestController extends OrganizationTeamJoinRequestControllerBase {
  constructor(protected readonly service: OrganizationTeamJoinRequestService) {
    super(service);
  }
}
