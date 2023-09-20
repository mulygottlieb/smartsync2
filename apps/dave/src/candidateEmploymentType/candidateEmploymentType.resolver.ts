import * as graphql from "@nestjs/graphql";
import { CandidateEmploymentTypeResolverBase } from "./base/candidateEmploymentType.resolver.base";
import { CandidateEmploymentType } from "./base/CandidateEmploymentType";
import { CandidateEmploymentTypeService } from "./candidateEmploymentType.service";

@graphql.Resolver(() => CandidateEmploymentType)
export class CandidateEmploymentTypeResolver extends CandidateEmploymentTypeResolverBase {
  constructor(protected readonly service: CandidateEmploymentTypeService) {
    super(service);
  }
}
