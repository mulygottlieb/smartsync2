import * as graphql from "@nestjs/graphql";
import { OrganizationProjectResolverBase } from "./base/organizationProject.resolver.base";
import { OrganizationProject } from "./base/OrganizationProject";
import { OrganizationProjectService } from "./organizationProject.service";

@graphql.Resolver(() => OrganizationProject)
export class OrganizationProjectResolver extends OrganizationProjectResolverBase {
  constructor(protected readonly service: OrganizationProjectService) {
    super(service);
  }
}
