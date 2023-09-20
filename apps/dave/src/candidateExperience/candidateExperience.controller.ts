import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateExperienceService } from "./candidateExperience.service";
import { CandidateExperienceControllerBase } from "./base/candidateExperience.controller.base";

@swagger.ApiTags("candidateExperiences")
@common.Controller("candidateExperiences")
export class CandidateExperienceController extends CandidateExperienceControllerBase {
  constructor(protected readonly service: CandidateExperienceService) {
    super(service);
  }
}
