import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateInterviewerService } from "./candidateInterviewer.service";
import { CandidateInterviewerControllerBase } from "./base/candidateInterviewer.controller.base";

@swagger.ApiTags("candidateInterviewers")
@common.Controller("candidateInterviewers")
export class CandidateInterviewerController extends CandidateInterviewerControllerBase {
  constructor(protected readonly service: CandidateInterviewerService) {
    super(service);
  }
}
