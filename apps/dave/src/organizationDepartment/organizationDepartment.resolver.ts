import * as graphql from "@nestjs/graphql";
import { OrganizationDepartmentResolverBase } from "./base/organizationDepartment.resolver.base";
import { OrganizationDepartment } from "./base/OrganizationDepartment";
import { OrganizationDepartmentService } from "./organizationDepartment.service";

@graphql.Resolver(() => OrganizationDepartment)
export class OrganizationDepartmentResolver extends OrganizationDepartmentResolverBase {
  constructor(protected readonly service: OrganizationDepartmentService) {
    super(service);
  }
}
