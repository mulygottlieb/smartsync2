import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AvailabilitySlotService } from "./availabilitySlot.service";
import { AvailabilitySlotControllerBase } from "./base/availabilitySlot.controller.base";

@swagger.ApiTags("availabilitySlots")
@common.Controller("availabilitySlots")
export class AvailabilitySlotController extends AvailabilitySlotControllerBase {
  constructor(protected readonly service: AvailabilitySlotService) {
    super(service);
  }
}
