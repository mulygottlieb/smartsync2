import * as graphql from "@nestjs/graphql";
import { IntegrationTypeResolverBase } from "./base/integrationType.resolver.base";
import { IntegrationType } from "./base/IntegrationType";
import { IntegrationTypeService } from "./integrationType.service";

@graphql.Resolver(() => IntegrationType)
export class IntegrationTypeResolver extends IntegrationTypeResolverBase {
  constructor(protected readonly service: IntegrationTypeService) {
    super(service);
  }
}
