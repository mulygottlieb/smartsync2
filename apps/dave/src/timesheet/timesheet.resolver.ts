import * as graphql from "@nestjs/graphql";
import { TimesheetResolverBase } from "./base/timesheet.resolver.base";
import { Timesheet } from "./base/Timesheet";
import { TimesheetService } from "./timesheet.service";

@graphql.Resolver(() => Timesheet)
export class TimesheetResolver extends TimesheetResolverBase {
  constructor(protected readonly service: TimesheetService) {
    super(service);
  }
}
