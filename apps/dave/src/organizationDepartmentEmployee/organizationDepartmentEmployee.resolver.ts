import * as graphql from "@nestjs/graphql";
import { OrganizationDepartmentEmployeeResolverBase } from "./base/organizationDepartmentEmployee.resolver.base";
import { OrganizationDepartmentEmployee } from "./base/OrganizationDepartmentEmployee";
import { OrganizationDepartmentEmployeeService } from "./organizationDepartmentEmployee.service";

@graphql.Resolver(() => OrganizationDepartmentEmployee)
export class OrganizationDepartmentEmployeeResolver extends OrganizationDepartmentEmployeeResolverBase {
  constructor(
    protected readonly service: OrganizationDepartmentEmployeeService
  ) {
    super(service);
  }
}
