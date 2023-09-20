import * as graphql from "@nestjs/graphql";
import { IntegrationEntitySettingResolverBase } from "./base/integrationEntitySetting.resolver.base";
import { IntegrationEntitySetting } from "./base/IntegrationEntitySetting";
import { IntegrationEntitySettingService } from "./integrationEntitySetting.service";

@graphql.Resolver(() => IntegrationEntitySetting)
export class IntegrationEntitySettingResolver extends IntegrationEntitySettingResolverBase {
  constructor(protected readonly service: IntegrationEntitySettingService) {
    super(service);
  }
}
