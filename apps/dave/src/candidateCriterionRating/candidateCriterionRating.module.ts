import { Module } from "@nestjs/common";
import { CandidateCriterionRatingModuleBase } from "./base/candidateCriterionRating.module.base";
import { CandidateCriterionRatingService } from "./candidateCriterionRating.service";
import { CandidateCriterionRatingController } from "./candidateCriterionRating.controller";
import { CandidateCriterionRatingResolver } from "./candidateCriterionRating.resolver";

@Module({
  imports: [CandidateCriterionRatingModuleBase],
  controllers: [CandidateCriterionRatingController],
  providers: [
    CandidateCriterionRatingService,
    CandidateCriterionRatingResolver,
  ],
  exports: [CandidateCriterionRatingService],
})
export class CandidateCriterionRatingModule {}
