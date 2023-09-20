import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidatePersonalQualityService } from "./candidatePersonalQuality.service";
import { CandidatePersonalQualityControllerBase } from "./base/candidatePersonalQuality.controller.base";

@swagger.ApiTags("candidatePersonalQualities")
@common.Controller("candidatePersonalQualities")
export class CandidatePersonalQualityController extends CandidatePersonalQualityControllerBase {
  constructor(protected readonly service: CandidatePersonalQualityService) {
    super(service);
  }
}
