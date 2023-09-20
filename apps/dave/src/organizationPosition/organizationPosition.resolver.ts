import * as graphql from "@nestjs/graphql";
import { OrganizationPositionResolverBase } from "./base/organizationPosition.resolver.base";
import { OrganizationPosition } from "./base/OrganizationPosition";
import { OrganizationPositionService } from "./organizationPosition.service";

@graphql.Resolver(() => OrganizationPosition)
export class OrganizationPositionResolver extends OrganizationPositionResolverBase {
  constructor(protected readonly service: OrganizationPositionService) {
    super(service);
  }
}
