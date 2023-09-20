import * as graphql from "@nestjs/graphql";
import { CandidateEducationResolverBase } from "./base/candidateEducation.resolver.base";
import { CandidateEducation } from "./base/CandidateEducation";
import { CandidateEducationService } from "./candidateEducation.service";

@graphql.Resolver(() => CandidateEducation)
export class CandidateEducationResolver extends CandidateEducationResolverBase {
  constructor(protected readonly service: CandidateEducationService) {
    super(service);
  }
}
