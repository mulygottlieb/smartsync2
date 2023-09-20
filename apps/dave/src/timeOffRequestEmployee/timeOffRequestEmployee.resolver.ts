import * as graphql from "@nestjs/graphql";
import { TimeOffRequestEmployeeResolverBase } from "./base/timeOffRequestEmployee.resolver.base";
import { TimeOffRequestEmployee } from "./base/TimeOffRequestEmployee";
import { TimeOffRequestEmployeeService } from "./timeOffRequestEmployee.service";

@graphql.Resolver(() => TimeOffRequestEmployee)
export class TimeOffRequestEmployeeResolver extends TimeOffRequestEmployeeResolverBase {
  constructor(protected readonly service: TimeOffRequestEmployeeService) {
    super(service);
  }
}
