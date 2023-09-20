import * as graphql from "@nestjs/graphql";
import { TagOrganizationResolverBase } from "./base/tagOrganization.resolver.base";
import { TagOrganization } from "./base/TagOrganization";
import { TagOrganizationService } from "./tagOrganization.service";

@graphql.Resolver(() => TagOrganization)
export class TagOrganizationResolver extends TagOrganizationResolverBase {
  constructor(protected readonly service: TagOrganizationService) {
    super(service);
  }
}
