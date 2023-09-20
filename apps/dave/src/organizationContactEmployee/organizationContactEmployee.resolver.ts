import * as graphql from "@nestjs/graphql";
import { OrganizationContactEmployeeResolverBase } from "./base/organizationContactEmployee.resolver.base";
import { OrganizationContactEmployee } from "./base/OrganizationContactEmployee";
import { OrganizationContactEmployeeService } from "./organizationContactEmployee.service";

@graphql.Resolver(() => OrganizationContactEmployee)
export class OrganizationContactEmployeeResolver extends OrganizationContactEmployeeResolverBase {
  constructor(protected readonly service: OrganizationContactEmployeeService) {
    super(service);
  }
}
