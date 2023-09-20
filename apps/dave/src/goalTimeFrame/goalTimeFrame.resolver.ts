import * as graphql from "@nestjs/graphql";
import { GoalTimeFrameResolverBase } from "./base/goalTimeFrame.resolver.base";
import { GoalTimeFrame } from "./base/GoalTimeFrame";
import { GoalTimeFrameService } from "./goalTimeFrame.service";

@graphql.Resolver(() => GoalTimeFrame)
export class GoalTimeFrameResolver extends GoalTimeFrameResolverBase {
  constructor(protected readonly service: GoalTimeFrameService) {
    super(service);
  }
}
