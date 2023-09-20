import * as graphql from "@nestjs/graphql";
import { CandidateTechnologyResolverBase } from "./base/candidateTechnology.resolver.base";
import { CandidateTechnology } from "./base/CandidateTechnology";
import { CandidateTechnologyService } from "./candidateTechnology.service";

@graphql.Resolver(() => CandidateTechnology)
export class CandidateTechnologyResolver extends CandidateTechnologyResolverBase {
  constructor(protected readonly service: CandidateTechnologyService) {
    super(service);
  }
}
