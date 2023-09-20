import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportCategoryService } from "./reportCategory.service";
import { ReportCategoryControllerBase } from "./base/reportCategory.controller.base";

@swagger.ApiTags("reportCategories")
@common.Controller("reportCategories")
export class ReportCategoryController extends ReportCategoryControllerBase {
  constructor(protected readonly service: ReportCategoryService) {
    super(service);
  }
}
