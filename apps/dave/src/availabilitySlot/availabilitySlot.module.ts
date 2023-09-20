import { Module } from "@nestjs/common";
import { AvailabilitySlotModuleBase } from "./base/availabilitySlot.module.base";
import { AvailabilitySlotService } from "./availabilitySlot.service";
import { AvailabilitySlotController } from "./availabilitySlot.controller";
import { AvailabilitySlotResolver } from "./availabilitySlot.resolver";

@Module({
  imports: [AvailabilitySlotModuleBase],
  controllers: [AvailabilitySlotController],
  providers: [AvailabilitySlotService, AvailabilitySlotResolver],
  exports: [AvailabilitySlotService],
})
export class AvailabilitySlotModule {}
