import * as graphql from "@nestjs/graphql";
import { JobSearchOccupationResolverBase } from "./base/jobSearchOccupation.resolver.base";
import { JobSearchOccupation } from "./base/JobSearchOccupation";
import { JobSearchOccupationService } from "./jobSearchOccupation.service";

@graphql.Resolver(() => JobSearchOccupation)
export class JobSearchOccupationResolver extends JobSearchOccupationResolverBase {
  constructor(protected readonly service: JobSearchOccupationService) {
    super(service);
  }
}
