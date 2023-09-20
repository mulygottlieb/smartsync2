import * as graphql from "@nestjs/graphql";
import { IntegrationMapResolverBase } from "./base/integrationMap.resolver.base";
import { IntegrationMap } from "./base/IntegrationMap";
import { IntegrationMapService } from "./integrationMap.service";

@graphql.Resolver(() => IntegrationMap)
export class IntegrationMapResolver extends IntegrationMapResolverBase {
  constructor(protected readonly service: IntegrationMapService) {
    super(service);
  }
}
