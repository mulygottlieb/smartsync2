import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EquipmentSharingService } from "./equipmentSharing.service";
import { EquipmentSharingControllerBase } from "./base/equipmentSharing.controller.base";

@swagger.ApiTags("equipmentSharings")
@common.Controller("equipmentSharings")
export class EquipmentSharingController extends EquipmentSharingControllerBase {
  constructor(protected readonly service: EquipmentSharingService) {
    super(service);
  }
}
