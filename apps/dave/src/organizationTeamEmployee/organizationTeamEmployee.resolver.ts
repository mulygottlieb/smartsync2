import * as graphql from "@nestjs/graphql";
import { OrganizationTeamEmployeeResolverBase } from "./base/organizationTeamEmployee.resolver.base";
import { OrganizationTeamEmployee } from "./base/OrganizationTeamEmployee";
import { OrganizationTeamEmployeeService } from "./organizationTeamEmployee.service";

@graphql.Resolver(() => OrganizationTeamEmployee)
export class OrganizationTeamEmployeeResolver extends OrganizationTeamEmployeeResolverBase {
  constructor(protected readonly service: OrganizationTeamEmployeeService) {
    super(service);
  }
}
