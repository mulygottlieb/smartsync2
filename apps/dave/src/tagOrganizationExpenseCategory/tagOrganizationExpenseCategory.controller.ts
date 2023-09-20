import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationExpenseCategoryService } from "./tagOrganizationExpenseCategory.service";
import { TagOrganizationExpenseCategoryControllerBase } from "./base/tagOrganizationExpenseCategory.controller.base";

@swagger.ApiTags("tagOrganizationExpenseCategories")
@common.Controller("tagOrganizationExpenseCategories")
export class TagOrganizationExpenseCategoryController extends TagOrganizationExpenseCategoryControllerBase {
  constructor(
    protected readonly service: TagOrganizationExpenseCategoryService
  ) {
    super(service);
  }
}
