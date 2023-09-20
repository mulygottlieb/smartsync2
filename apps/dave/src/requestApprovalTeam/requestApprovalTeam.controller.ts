import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RequestApprovalTeamService } from "./requestApprovalTeam.service";
import { RequestApprovalTeamControllerBase } from "./base/requestApprovalTeam.controller.base";

@swagger.ApiTags("requestApprovalTeams")
@common.Controller("requestApprovalTeams")
export class RequestApprovalTeamController extends RequestApprovalTeamControllerBase {
  constructor(protected readonly service: RequestApprovalTeamService) {
    super(service);
  }
}
