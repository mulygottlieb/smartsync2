import * as graphql from "@nestjs/graphql";
import { CandidateFeedbackResolverBase } from "./base/candidateFeedback.resolver.base";
import { CandidateFeedback } from "./base/CandidateFeedback";
import { CandidateFeedbackService } from "./candidateFeedback.service";

@graphql.Resolver(() => CandidateFeedback)
export class CandidateFeedbackResolver extends CandidateFeedbackResolverBase {
  constructor(protected readonly service: CandidateFeedbackService) {
    super(service);
  }
}
