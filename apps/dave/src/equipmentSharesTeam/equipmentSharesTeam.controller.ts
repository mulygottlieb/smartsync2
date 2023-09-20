import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EquipmentSharesTeamService } from "./equipmentSharesTeam.service";
import { EquipmentSharesTeamControllerBase } from "./base/equipmentSharesTeam.controller.base";

@swagger.ApiTags("equipmentSharesTeams")
@common.Controller("equipmentSharesTeams")
export class EquipmentSharesTeamController extends EquipmentSharesTeamControllerBase {
  constructor(protected readonly service: EquipmentSharesTeamService) {
    super(service);
  }
}
