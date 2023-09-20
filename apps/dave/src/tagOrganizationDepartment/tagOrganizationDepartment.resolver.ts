import * as graphql from "@nestjs/graphql";
import { TagOrganizationDepartmentResolverBase } from "./base/tagOrganizationDepartment.resolver.base";
import { TagOrganizationDepartment } from "./base/TagOrganizationDepartment";
import { TagOrganizationDepartmentService } from "./tagOrganizationDepartment.service";

@graphql.Resolver(() => TagOrganizationDepartment)
export class TagOrganizationDepartmentResolver extends TagOrganizationDepartmentResolverBase {
  constructor(protected readonly service: TagOrganizationDepartmentService) {
    super(service);
  }
}
