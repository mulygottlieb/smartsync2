import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateInterviewService } from "./candidateInterview.service";
import { CandidateInterviewControllerBase } from "./base/candidateInterview.controller.base";

@swagger.ApiTags("candidateInterviews")
@common.Controller("candidateInterviews")
export class CandidateInterviewController extends CandidateInterviewControllerBase {
  constructor(protected readonly service: CandidateInterviewService) {
    super(service);
  }
}
