import * as graphql from "@nestjs/graphql";
import { OrganizationSprintResolverBase } from "./base/organizationSprint.resolver.base";
import { OrganizationSprint } from "./base/OrganizationSprint";
import { OrganizationSprintService } from "./organizationSprint.service";

@graphql.Resolver(() => OrganizationSprint)
export class OrganizationSprintResolver extends OrganizationSprintResolverBase {
  constructor(protected readonly service: OrganizationSprintService) {
    super(service);
  }
}
