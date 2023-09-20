import * as graphql from "@nestjs/graphql";
import { GoalGeneralSettingResolverBase } from "./base/goalGeneralSetting.resolver.base";
import { GoalGeneralSetting } from "./base/GoalGeneralSetting";
import { GoalGeneralSettingService } from "./goalGeneralSetting.service";

@graphql.Resolver(() => GoalGeneralSetting)
export class GoalGeneralSettingResolver extends GoalGeneralSettingResolverBase {
  constructor(protected readonly service: GoalGeneralSettingService) {
    super(service);
  }
}
