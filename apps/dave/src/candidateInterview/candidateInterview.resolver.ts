import * as graphql from "@nestjs/graphql";
import { CandidateInterviewResolverBase } from "./base/candidateInterview.resolver.base";
import { CandidateInterview } from "./base/CandidateInterview";
import { CandidateInterviewService } from "./candidateInterview.service";

@graphql.Resolver(() => CandidateInterview)
export class CandidateInterviewResolver extends CandidateInterviewResolverBase {
  constructor(protected readonly service: CandidateInterviewService) {
    super(service);
  }
}
