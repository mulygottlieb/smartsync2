import * as graphql from "@nestjs/graphql";
import { TimeSlotMinuteResolverBase } from "./base/timeSlotMinute.resolver.base";
import { TimeSlotMinute } from "./base/TimeSlotMinute";
import { TimeSlotMinuteService } from "./timeSlotMinute.service";

@graphql.Resolver(() => TimeSlotMinute)
export class TimeSlotMinuteResolver extends TimeSlotMinuteResolverBase {
  constructor(protected readonly service: TimeSlotMinuteService) {
    super(service);
  }
}
