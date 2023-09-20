import * as graphql from "@nestjs/graphql";
import { TenantSettingResolverBase } from "./base/tenantSetting.resolver.base";
import { TenantSetting } from "./base/TenantSetting";
import { TenantSettingService } from "./tenantSetting.service";

@graphql.Resolver(() => TenantSetting)
export class TenantSettingResolver extends TenantSettingResolverBase {
  constructor(protected readonly service: TenantSettingService) {
    super(service);
  }
}
