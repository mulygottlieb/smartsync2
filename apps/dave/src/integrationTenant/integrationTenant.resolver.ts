import * as graphql from "@nestjs/graphql";
import { IntegrationTenantResolverBase } from "./base/integrationTenant.resolver.base";
import { IntegrationTenant } from "./base/IntegrationTenant";
import { IntegrationTenantService } from "./integrationTenant.service";

@graphql.Resolver(() => IntegrationTenant)
export class IntegrationTenantResolver extends IntegrationTenantResolverBase {
  constructor(protected readonly service: IntegrationTenantService) {
    super(service);
  }
}
