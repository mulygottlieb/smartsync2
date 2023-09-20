import * as graphql from "@nestjs/graphql";
import { TimeLogResolverBase } from "./base/timeLog.resolver.base";
import { TimeLog } from "./base/TimeLog";
import { TimeLogService } from "./timeLog.service";

@graphql.Resolver(() => TimeLog)
export class TimeLogResolver extends TimeLogResolverBase {
  constructor(protected readonly service: TimeLogService) {
    super(service);
  }
}
