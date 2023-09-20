import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaskTeamService } from "./taskTeam.service";
import { TaskTeamControllerBase } from "./base/taskTeam.controller.base";

@swagger.ApiTags("taskTeams")
@common.Controller("taskTeams")
export class TaskTeamController extends TaskTeamControllerBase {
  constructor(protected readonly service: TaskTeamService) {
    super(service);
  }
}
