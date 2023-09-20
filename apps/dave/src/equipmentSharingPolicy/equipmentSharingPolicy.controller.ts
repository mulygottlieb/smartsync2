import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EquipmentSharingPolicyService } from "./equipmentSharingPolicy.service";
import { EquipmentSharingPolicyControllerBase } from "./base/equipmentSharingPolicy.controller.base";

@swagger.ApiTags("equipmentSharingPolicies")
@common.Controller("equipmentSharingPolicies")
export class EquipmentSharingPolicyController extends EquipmentSharingPolicyControllerBase {
  constructor(protected readonly service: EquipmentSharingPolicyService) {
    super(service);
  }
}
