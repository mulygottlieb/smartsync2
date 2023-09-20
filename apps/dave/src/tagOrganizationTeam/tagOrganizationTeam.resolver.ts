import * as graphql from "@nestjs/graphql";
import { TagOrganizationTeamResolverBase } from "./base/tagOrganizationTeam.resolver.base";
import { TagOrganizationTeam } from "./base/TagOrganizationTeam";
import { TagOrganizationTeamService } from "./tagOrganizationTeam.service";

@graphql.Resolver(() => TagOrganizationTeam)
export class TagOrganizationTeamResolver extends TagOrganizationTeamResolverBase {
  constructor(protected readonly service: TagOrganizationTeamService) {
    super(service);
  }
}
