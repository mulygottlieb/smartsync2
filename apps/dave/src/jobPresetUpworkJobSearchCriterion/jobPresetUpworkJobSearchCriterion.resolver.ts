import * as graphql from "@nestjs/graphql";
import { JobPresetUpworkJobSearchCriterionResolverBase } from "./base/jobPresetUpworkJobSearchCriterion.resolver.base";
import { JobPresetUpworkJobSearchCriterion } from "./base/JobPresetUpworkJobSearchCriterion";
import { JobPresetUpworkJobSearchCriterionService } from "./jobPresetUpworkJobSearchCriterion.service";

@graphql.Resolver(() => JobPresetUpworkJobSearchCriterion)
export class JobPresetUpworkJobSearchCriterionResolver extends JobPresetUpworkJobSearchCriterionResolverBase {
  constructor(
    protected readonly service: JobPresetUpworkJobSearchCriterionService
  ) {
    super(service);
  }
}
