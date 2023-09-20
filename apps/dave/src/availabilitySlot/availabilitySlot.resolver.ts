import * as graphql from "@nestjs/graphql";
import { AvailabilitySlotResolverBase } from "./base/availabilitySlot.resolver.base";
import { AvailabilitySlot } from "./base/AvailabilitySlot";
import { AvailabilitySlotService } from "./availabilitySlot.service";

@graphql.Resolver(() => AvailabilitySlot)
export class AvailabilitySlotResolver extends AvailabilitySlotResolverBase {
  constructor(protected readonly service: AvailabilitySlotService) {
    super(service);
  }
}
