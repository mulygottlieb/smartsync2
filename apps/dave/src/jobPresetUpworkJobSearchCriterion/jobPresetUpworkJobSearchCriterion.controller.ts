import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobPresetUpworkJobSearchCriterionService } from "./jobPresetUpworkJobSearchCriterion.service";
import { JobPresetUpworkJobSearchCriterionControllerBase } from "./base/jobPresetUpworkJobSearchCriterion.controller.base";

@swagger.ApiTags("jobPresetUpworkJobSearchCriteria")
@common.Controller("jobPresetUpworkJobSearchCriteria")
export class JobPresetUpworkJobSearchCriterionController extends JobPresetUpworkJobSearchCriterionControllerBase {
  constructor(
    protected readonly service: JobPresetUpworkJobSearchCriterionService
  ) {
    super(service);
  }
}
