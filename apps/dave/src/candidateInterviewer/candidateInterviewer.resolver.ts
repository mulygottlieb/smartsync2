import * as graphql from "@nestjs/graphql";
import { CandidateInterviewerResolverBase } from "./base/candidateInterviewer.resolver.base";
import { CandidateInterviewer } from "./base/CandidateInterviewer";
import { CandidateInterviewerService } from "./candidateInterviewer.service";

@graphql.Resolver(() => CandidateInterviewer)
export class CandidateInterviewerResolver extends CandidateInterviewerResolverBase {
  constructor(protected readonly service: CandidateInterviewerService) {
    super(service);
  }
}
