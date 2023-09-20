import * as graphql from "@nestjs/graphql";
import { OrganizationTeamResolverBase } from "./base/organizationTeam.resolver.base";
import { OrganizationTeam } from "./base/OrganizationTeam";
import { OrganizationTeamService } from "./organizationTeam.service";

@graphql.Resolver(() => OrganizationTeam)
export class OrganizationTeamResolver extends OrganizationTeamResolverBase {
  constructor(protected readonly service: OrganizationTeamService) {
    super(service);
  }
}
