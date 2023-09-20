import * as graphql from "@nestjs/graphql";
import { InviteOrganizationTeamResolverBase } from "./base/inviteOrganizationTeam.resolver.base";
import { InviteOrganizationTeam } from "./base/InviteOrganizationTeam";
import { InviteOrganizationTeamService } from "./inviteOrganizationTeam.service";

@graphql.Resolver(() => InviteOrganizationTeam)
export class InviteOrganizationTeamResolver extends InviteOrganizationTeamResolverBase {
  constructor(protected readonly service: InviteOrganizationTeamService) {
    super(service);
  }
}
