import * as graphql from "@nestjs/graphql";
import { CandidateCriterionRatingResolverBase } from "./base/candidateCriterionRating.resolver.base";
import { CandidateCriterionRating } from "./base/CandidateCriterionRating";
import { CandidateCriterionRatingService } from "./candidateCriterionRating.service";

@graphql.Resolver(() => CandidateCriterionRating)
export class CandidateCriterionRatingResolver extends CandidateCriterionRatingResolverBase {
  constructor(protected readonly service: CandidateCriterionRatingService) {
    super(service);
  }
}
