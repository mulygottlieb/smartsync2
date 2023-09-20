import * as graphql from "@nestjs/graphql";
import { TimeSlotTimeLogResolverBase } from "./base/timeSlotTimeLog.resolver.base";
import { TimeSlotTimeLog } from "./base/TimeSlotTimeLog";
import { TimeSlotTimeLogService } from "./timeSlotTimeLog.service";

@graphql.Resolver(() => TimeSlotTimeLog)
export class TimeSlotTimeLogResolver extends TimeSlotTimeLogResolverBase {
  constructor(protected readonly service: TimeSlotTimeLogService) {
    super(service);
  }
}
