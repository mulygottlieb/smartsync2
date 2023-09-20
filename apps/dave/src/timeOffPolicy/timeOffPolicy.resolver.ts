import * as graphql from "@nestjs/graphql";
import { TimeOffPolicyResolverBase } from "./base/timeOffPolicy.resolver.base";
import { TimeOffPolicy } from "./base/TimeOffPolicy";
import { TimeOffPolicyService } from "./timeOffPolicy.service";

@graphql.Resolver(() => TimeOffPolicy)
export class TimeOffPolicyResolver extends TimeOffPolicyResolverBase {
  constructor(protected readonly service: TimeOffPolicyService) {
    super(service);
  }
}
