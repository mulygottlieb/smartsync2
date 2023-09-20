import * as graphql from "@nestjs/graphql";
import { OrganizationTaskSettingResolverBase } from "./base/organizationTaskSetting.resolver.base";
import { OrganizationTaskSetting } from "./base/OrganizationTaskSetting";
import { OrganizationTaskSettingService } from "./organizationTaskSetting.service";

@graphql.Resolver(() => OrganizationTaskSetting)
export class OrganizationTaskSettingResolver extends OrganizationTaskSettingResolverBase {
  constructor(protected readonly service: OrganizationTaskSettingService) {
    super(service);
  }
}
