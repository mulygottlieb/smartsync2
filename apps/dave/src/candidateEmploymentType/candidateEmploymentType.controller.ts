import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateEmploymentTypeService } from "./candidateEmploymentType.service";
import { CandidateEmploymentTypeControllerBase } from "./base/candidateEmploymentType.controller.base";

@swagger.ApiTags("candidateEmploymentTypes")
@common.Controller("candidateEmploymentTypes")
export class CandidateEmploymentTypeController extends CandidateEmploymentTypeControllerBase {
  constructor(protected readonly service: CandidateEmploymentTypeService) {
    super(service);
  }
}
