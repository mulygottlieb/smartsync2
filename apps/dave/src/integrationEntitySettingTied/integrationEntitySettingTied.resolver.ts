import * as graphql from "@nestjs/graphql";
import { IntegrationEntitySettingTiedResolverBase } from "./base/integrationEntitySettingTied.resolver.base";
import { IntegrationEntitySettingTied } from "./base/IntegrationEntitySettingTied";
import { IntegrationEntitySettingTiedService } from "./integrationEntitySettingTied.service";

@graphql.Resolver(() => IntegrationEntitySettingTied)
export class IntegrationEntitySettingTiedResolver extends IntegrationEntitySettingTiedResolverBase {
  constructor(protected readonly service: IntegrationEntitySettingTiedService) {
    super(service);
  }
}
