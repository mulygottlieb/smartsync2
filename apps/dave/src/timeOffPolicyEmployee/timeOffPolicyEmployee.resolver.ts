import * as graphql from "@nestjs/graphql";
import { TimeOffPolicyEmployeeResolverBase } from "./base/timeOffPolicyEmployee.resolver.base";
import { TimeOffPolicyEmployee } from "./base/TimeOffPolicyEmployee";
import { TimeOffPolicyEmployeeService } from "./timeOffPolicyEmployee.service";

@graphql.Resolver(() => TimeOffPolicyEmployee)
export class TimeOffPolicyEmployeeResolver extends TimeOffPolicyEmployeeResolverBase {
  constructor(protected readonly service: TimeOffPolicyEmployeeService) {
    super(service);
  }
}
