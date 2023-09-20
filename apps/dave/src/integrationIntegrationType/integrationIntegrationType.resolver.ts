import * as graphql from "@nestjs/graphql";
import { IntegrationIntegrationTypeResolverBase } from "./base/integrationIntegrationType.resolver.base";
import { IntegrationIntegrationType } from "./base/IntegrationIntegrationType";
import { IntegrationIntegrationTypeService } from "./integrationIntegrationType.service";

@graphql.Resolver(() => IntegrationIntegrationType)
export class IntegrationIntegrationTypeResolver extends IntegrationIntegrationTypeResolverBase {
  constructor(protected readonly service: IntegrationIntegrationTypeService) {
    super(service);
  }
}
