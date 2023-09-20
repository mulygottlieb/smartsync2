import * as graphql from "@nestjs/graphql";
import { GoalTemplateResolverBase } from "./base/goalTemplate.resolver.base";
import { GoalTemplate } from "./base/GoalTemplate";
import { GoalTemplateService } from "./goalTemplate.service";

@graphql.Resolver(() => GoalTemplate)
export class GoalTemplateResolver extends GoalTemplateResolverBase {
  constructor(protected readonly service: GoalTemplateService) {
    super(service);
  }
}
