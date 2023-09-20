import * as graphql from "@nestjs/graphql";
import { GoalKpiResolverBase } from "./base/goalKpi.resolver.base";
import { GoalKpi } from "./base/GoalKpi";
import { GoalKpiService } from "./goalKpi.service";

@graphql.Resolver(() => GoalKpi)
export class GoalKpiResolver extends GoalKpiResolverBase {
  constructor(protected readonly service: GoalKpiService) {
    super(service);
  }
}
