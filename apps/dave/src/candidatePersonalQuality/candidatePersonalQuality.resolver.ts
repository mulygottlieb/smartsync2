import * as graphql from "@nestjs/graphql";
import { CandidatePersonalQualityResolverBase } from "./base/candidatePersonalQuality.resolver.base";
import { CandidatePersonalQuality } from "./base/CandidatePersonalQuality";
import { CandidatePersonalQualityService } from "./candidatePersonalQuality.service";

@graphql.Resolver(() => CandidatePersonalQuality)
export class CandidatePersonalQualityResolver extends CandidatePersonalQualityResolverBase {
  constructor(protected readonly service: CandidatePersonalQualityService) {
    super(service);
  }
}
