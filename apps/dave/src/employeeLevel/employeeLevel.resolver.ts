import * as graphql from "@nestjs/graphql";
import { EmployeeLevelResolverBase } from "./base/employeeLevel.resolver.base";
import { EmployeeLevel } from "./base/EmployeeLevel";
import { EmployeeLevelService } from "./employeeLevel.service";

@graphql.Resolver(() => EmployeeLevel)
export class EmployeeLevelResolver extends EmployeeLevelResolverBase {
  constructor(protected readonly service: EmployeeLevelService) {
    super(service);
  }
}
