import * as graphql from "@nestjs/graphql";
import { FeatureOrganizationResolverBase } from "./base/featureOrganization.resolver.base";
import { FeatureOrganization } from "./base/FeatureOrganization";
import { FeatureOrganizationService } from "./featureOrganization.service";

@graphql.Resolver(() => FeatureOrganization)
export class FeatureOrganizationResolver extends FeatureOrganizationResolverBase {
  constructor(protected readonly service: FeatureOrganizationService) {
    super(service);
  }
}
