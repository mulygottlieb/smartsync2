import * as graphql from "@nestjs/graphql";
import { UserOrganizationResolverBase } from "./base/userOrganization.resolver.base";
import { UserOrganization } from "./base/UserOrganization";
import { UserOrganizationService } from "./userOrganization.service";

@graphql.Resolver(() => UserOrganization)
export class UserOrganizationResolver extends UserOrganizationResolverBase {
  constructor(protected readonly service: UserOrganizationService) {
    super(service);
  }
}
