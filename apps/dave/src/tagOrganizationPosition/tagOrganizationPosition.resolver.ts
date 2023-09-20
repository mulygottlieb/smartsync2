import * as graphql from "@nestjs/graphql";
import { TagOrganizationPositionResolverBase } from "./base/tagOrganizationPosition.resolver.base";
import { TagOrganizationPosition } from "./base/TagOrganizationPosition";
import { TagOrganizationPositionService } from "./tagOrganizationPosition.service";

@graphql.Resolver(() => TagOrganizationPosition)
export class TagOrganizationPositionResolver extends TagOrganizationPositionResolverBase {
  constructor(protected readonly service: TagOrganizationPositionService) {
    super(service);
  }
}
