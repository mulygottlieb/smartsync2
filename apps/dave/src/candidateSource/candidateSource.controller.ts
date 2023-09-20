import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateSourceService } from "./candidateSource.service";
import { CandidateSourceControllerBase } from "./base/candidateSource.controller.base";

@swagger.ApiTags("candidateSources")
@common.Controller("candidateSources")
export class CandidateSourceController extends CandidateSourceControllerBase {
  constructor(protected readonly service: CandidateSourceService) {
    super(service);
  }
}
