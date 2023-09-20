import * as graphql from "@nestjs/graphql";
import { EmployeeAwardResolverBase } from "./base/employeeAward.resolver.base";
import { EmployeeAward } from "./base/EmployeeAward";
import { EmployeeAwardService } from "./employeeAward.service";

@graphql.Resolver(() => EmployeeAward)
export class EmployeeAwardResolver extends EmployeeAwardResolverBase {
  constructor(protected readonly service: EmployeeAwardService) {
    super(service);
  }
}
