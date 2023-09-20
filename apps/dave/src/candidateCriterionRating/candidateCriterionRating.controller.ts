import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateCriterionRatingService } from "./candidateCriterionRating.service";
import { CandidateCriterionRatingControllerBase } from "./base/candidateCriterionRating.controller.base";

@swagger.ApiTags("candidateCriterionRatings")
@common.Controller("candidateCriterionRatings")
export class CandidateCriterionRatingController extends CandidateCriterionRatingControllerBase {
  constructor(protected readonly service: CandidateCriterionRatingService) {
    super(service);
  }
}
