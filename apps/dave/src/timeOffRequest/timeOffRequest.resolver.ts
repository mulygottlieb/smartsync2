import * as graphql from "@nestjs/graphql";
import { TimeOffRequestResolverBase } from "./base/timeOffRequest.resolver.base";
import { TimeOffRequest } from "./base/TimeOffRequest";
import { TimeOffRequestService } from "./timeOffRequest.service";

@graphql.Resolver(() => TimeOffRequest)
export class TimeOffRequestResolver extends TimeOffRequestResolverBase {
  constructor(protected readonly service: TimeOffRequestService) {
    super(service);
  }
}
