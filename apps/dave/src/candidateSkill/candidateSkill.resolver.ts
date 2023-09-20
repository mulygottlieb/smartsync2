import * as graphql from "@nestjs/graphql";
import { CandidateSkillResolverBase } from "./base/candidateSkill.resolver.base";
import { CandidateSkill } from "./base/CandidateSkill";
import { CandidateSkillService } from "./candidateSkill.service";

@graphql.Resolver(() => CandidateSkill)
export class CandidateSkillResolver extends CandidateSkillResolverBase {
  constructor(protected readonly service: CandidateSkillService) {
    super(service);
  }
}
