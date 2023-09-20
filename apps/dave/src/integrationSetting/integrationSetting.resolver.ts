import * as graphql from "@nestjs/graphql";
import { IntegrationSettingResolverBase } from "./base/integrationSetting.resolver.base";
import { IntegrationSetting } from "./base/IntegrationSetting";
import { IntegrationSettingService } from "./integrationSetting.service";

@graphql.Resolver(() => IntegrationSetting)
export class IntegrationSettingResolver extends IntegrationSettingResolverBase {
  constructor(protected readonly service: IntegrationSettingService) {
    super(service);
  }
}
