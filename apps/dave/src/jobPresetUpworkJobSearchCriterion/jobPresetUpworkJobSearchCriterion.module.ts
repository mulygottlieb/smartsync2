import { Module } from "@nestjs/common";
import { JobPresetUpworkJobSearchCriterionModuleBase } from "./base/jobPresetUpworkJobSearchCriterion.module.base";
import { JobPresetUpworkJobSearchCriterionService } from "./jobPresetUpworkJobSearchCriterion.service";
import { JobPresetUpworkJobSearchCriterionController } from "./jobPresetUpworkJobSearchCriterion.controller";
import { JobPresetUpworkJobSearchCriterionResolver } from "./jobPresetUpworkJobSearchCriterion.resolver";

@Module({
  imports: [JobPresetUpworkJobSearchCriterionModuleBase],
  controllers: [JobPresetUpworkJobSearchCriterionController],
  providers: [
    JobPresetUpworkJobSearchCriterionService,
    JobPresetUpworkJobSearchCriterionResolver,
  ],
  exports: [JobPresetUpworkJobSearchCriterionService],
})
export class JobPresetUpworkJobSearchCriterionModule {}
