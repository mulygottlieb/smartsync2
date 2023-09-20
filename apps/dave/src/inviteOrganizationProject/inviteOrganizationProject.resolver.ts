import * as graphql from "@nestjs/graphql";
import { InviteOrganizationProjectResolverBase } from "./base/inviteOrganizationProject.resolver.base";
import { InviteOrganizationProject } from "./base/InviteOrganizationProject";
import { InviteOrganizationProjectService } from "./inviteOrganizationProject.service";

@graphql.Resolver(() => InviteOrganizationProject)
export class InviteOrganizationProjectResolver extends InviteOrganizationProjectResolverBase {
  constructor(protected readonly service: InviteOrganizationProjectService) {
    super(service);
  }
}
