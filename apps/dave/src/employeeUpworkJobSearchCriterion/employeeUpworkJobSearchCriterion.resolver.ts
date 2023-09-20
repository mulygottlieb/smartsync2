import * as graphql from "@nestjs/graphql";
import { EmployeeUpworkJobSearchCriterionResolverBase } from "./base/employeeUpworkJobSearchCriterion.resolver.base";
import { EmployeeUpworkJobSearchCriterion } from "./base/EmployeeUpworkJobSearchCriterion";
import { EmployeeUpworkJobSearchCriterionService } from "./employeeUpworkJobSearchCriterion.service";

@graphql.Resolver(() => EmployeeUpworkJobSearchCriterion)
export class EmployeeUpworkJobSearchCriterionResolver extends EmployeeUpworkJobSearchCriterionResolverBase {
  constructor(
    protected readonly service: EmployeeUpworkJobSearchCriterionService
  ) {
    super(service);
  }
}
