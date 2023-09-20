import * as graphql from "@nestjs/graphql";
import { TagCandidateResolverBase } from "./base/tagCandidate.resolver.base";
import { TagCandidate } from "./base/TagCandidate";
import { TagCandidateService } from "./tagCandidate.service";

@graphql.Resolver(() => TagCandidate)
export class TagCandidateResolver extends TagCandidateResolverBase {
  constructor(protected readonly service: TagCandidateService) {
    super(service);
  }
}
