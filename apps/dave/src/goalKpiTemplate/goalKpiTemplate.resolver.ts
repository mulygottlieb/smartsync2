import * as graphql from "@nestjs/graphql";
import { GoalKpiTemplateResolverBase } from "./base/goalKpiTemplate.resolver.base";
import { GoalKpiTemplate } from "./base/GoalKpiTemplate";
import { GoalKpiTemplateService } from "./goalKpiTemplate.service";

@graphql.Resolver(() => GoalKpiTemplate)
export class GoalKpiTemplateResolver extends GoalKpiTemplateResolverBase {
  constructor(protected readonly service: GoalKpiTemplateService) {
    super(service);
  }
}
