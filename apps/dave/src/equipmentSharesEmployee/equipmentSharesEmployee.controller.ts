import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EquipmentSharesEmployeeService } from "./equipmentSharesEmployee.service";
import { EquipmentSharesEmployeeControllerBase } from "./base/equipmentSharesEmployee.controller.base";

@swagger.ApiTags("equipmentSharesEmployees")
@common.Controller("equipmentSharesEmployees")
export class EquipmentSharesEmployeeController extends EquipmentSharesEmployeeControllerBase {
  constructor(protected readonly service: EquipmentSharesEmployeeService) {
    super(service);
  }
}
