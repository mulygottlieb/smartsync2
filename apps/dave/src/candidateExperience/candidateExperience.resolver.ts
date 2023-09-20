import * as graphql from "@nestjs/graphql";
import { CandidateExperienceResolverBase } from "./base/candidateExperience.resolver.base";
import { CandidateExperience } from "./base/CandidateExperience";
import { CandidateExperienceService } from "./candidateExperience.service";

@graphql.Resolver(() => CandidateExperience)
export class CandidateExperienceResolver extends CandidateExperienceResolverBase {
  constructor(protected readonly service: CandidateExperienceService) {
    super(service);
  }
}
