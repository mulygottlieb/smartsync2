import * as graphql from "@nestjs/graphql";
import { CandidateSourceResolverBase } from "./base/candidateSource.resolver.base";
import { CandidateSource } from "./base/CandidateSource";
import { CandidateSourceService } from "./candidateSource.service";

@graphql.Resolver(() => CandidateSource)
export class CandidateSourceResolver extends CandidateSourceResolverBase {
  constructor(protected readonly service: CandidateSourceService) {
    super(service);
  }
}
