import * as graphql from "@nestjs/graphql";
import { OrganizationProjectEmployeeResolverBase } from "./base/organizationProjectEmployee.resolver.base";
import { OrganizationProjectEmployee } from "./base/OrganizationProjectEmployee";
import { OrganizationProjectEmployeeService } from "./organizationProjectEmployee.service";

@graphql.Resolver(() => OrganizationProjectEmployee)
export class OrganizationProjectEmployeeResolver extends OrganizationProjectEmployeeResolverBase {
  constructor(protected readonly service: OrganizationProjectEmployeeService) {
    super(service);
  }
}
