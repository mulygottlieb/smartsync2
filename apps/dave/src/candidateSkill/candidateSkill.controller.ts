import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateSkillService } from "./candidateSkill.service";
import { CandidateSkillControllerBase } from "./base/candidateSkill.controller.base";

@swagger.ApiTags("candidateSkills")
@common.Controller("candidateSkills")
export class CandidateSkillController extends CandidateSkillControllerBase {
  constructor(protected readonly service: CandidateSkillService) {
    super(service);
  }
}
