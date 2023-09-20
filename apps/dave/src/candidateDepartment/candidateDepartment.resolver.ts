import * as graphql from "@nestjs/graphql";
import { CandidateDepartmentResolverBase } from "./base/candidateDepartment.resolver.base";
import { CandidateDepartment } from "./base/CandidateDepartment";
import { CandidateDepartmentService } from "./candidateDepartment.service";

@graphql.Resolver(() => CandidateDepartment)
export class CandidateDepartmentResolver extends CandidateDepartmentResolverBase {
  constructor(protected readonly service: CandidateDepartmentService) {
    super(service);
  }
}
