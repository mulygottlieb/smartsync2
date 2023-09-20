import * as graphql from "@nestjs/graphql";
import { OrganizationAwardResolverBase } from "./base/organizationAward.resolver.base";
import { OrganizationAward } from "./base/OrganizationAward";
import { OrganizationAwardService } from "./organizationAward.service";

@graphql.Resolver(() => OrganizationAward)
export class OrganizationAwardResolver extends OrganizationAwardResolverBase {
  constructor(protected readonly service: OrganizationAwardService) {
    super(service);
  }
}
