import * as graphql from "@nestjs/graphql";
import { OrganizationTeamJoinRequestResolverBase } from "./base/organizationTeamJoinRequest.resolver.base";
import { OrganizationTeamJoinRequest } from "./base/OrganizationTeamJoinRequest";
import { OrganizationTeamJoinRequestService } from "./organizationTeamJoinRequest.service";

@graphql.Resolver(() => OrganizationTeamJoinRequest)
export class OrganizationTeamJoinRequestResolver extends OrganizationTeamJoinRequestResolverBase {
  constructor(protected readonly service: OrganizationTeamJoinRequestService) {
    super(service);
  }
}
