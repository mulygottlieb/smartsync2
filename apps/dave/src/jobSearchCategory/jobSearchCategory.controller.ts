import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JobSearchCategoryService } from "./jobSearchCategory.service";
import { JobSearchCategoryControllerBase } from "./base/jobSearchCategory.controller.base";

@swagger.ApiTags("jobSearchCategories")
@common.Controller("jobSearchCategories")
export class JobSearchCategoryController extends JobSearchCategoryControllerBase {
  constructor(protected readonly service: JobSearchCategoryService) {
    super(service);
  }
}
