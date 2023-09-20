import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagEquipmentService } from "./tagEquipment.service";
import { TagEquipmentControllerBase } from "./base/tagEquipment.controller.base";

@swagger.ApiTags("tagEquipments")
@common.Controller("tagEquipments")
export class TagEquipmentController extends TagEquipmentControllerBase {
  constructor(protected readonly service: TagEquipmentService) {
    super(service);
  }
}
