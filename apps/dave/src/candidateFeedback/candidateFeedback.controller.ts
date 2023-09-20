import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateFeedbackService } from "./candidateFeedback.service";
import { CandidateFeedbackControllerBase } from "./base/candidateFeedback.controller.base";

@swagger.ApiTags("candidateFeedbacks")
@common.Controller("candidateFeedbacks")
export class CandidateFeedbackController extends CandidateFeedbackControllerBase {
  constructor(protected readonly service: CandidateFeedbackService) {
    super(service);
  }
}
