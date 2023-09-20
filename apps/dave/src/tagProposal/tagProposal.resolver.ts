import * as graphql from "@nestjs/graphql";
import { TagProposalResolverBase } from "./base/tagProposal.resolver.base";
import { TagProposal } from "./base/TagProposal";
import { TagProposalService } from "./tagProposal.service";

@graphql.Resolver(() => TagProposal)
export class TagProposalResolver extends TagProposalResolverBase {
  constructor(protected readonly service: TagProposalService) {
    super(service);
  }
}
