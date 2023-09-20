import * as graphql from "@nestjs/graphql";
import { OrganizationEmploymentTypeEmployeeResolverBase } from "./base/organizationEmploymentTypeEmployee.resolver.base";
import { OrganizationEmploymentTypeEmployee } from "./base/OrganizationEmploymentTypeEmployee";
import { OrganizationEmploymentTypeEmployeeService } from "./organizationEmploymentTypeEmployee.service";

@graphql.Resolver(() => OrganizationEmploymentTypeEmployee)
export class OrganizationEmploymentTypeEmployeeResolver extends OrganizationEmploymentTypeEmployeeResolverBase {
  constructor(
    protected readonly service: OrganizationEmploymentTypeEmployeeService
  ) {
    super(service);
  }
}
