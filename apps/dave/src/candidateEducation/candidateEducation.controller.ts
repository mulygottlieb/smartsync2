import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateEducationService } from "./candidateEducation.service";
import { CandidateEducationControllerBase } from "./base/candidateEducation.controller.base";

@swagger.ApiTags("candidateEducations")
@common.Controller("candidateEducations")
export class CandidateEducationController extends CandidateEducationControllerBase {
  constructor(protected readonly service: CandidateEducationService) {
    super(service);
  }
}
