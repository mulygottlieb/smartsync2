import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExpenseCategoryService } from "./expenseCategory.service";
import { ExpenseCategoryControllerBase } from "./base/expenseCategory.controller.base";

@swagger.ApiTags("expenseCategories")
@common.Controller("expenseCategories")
export class ExpenseCategoryController extends ExpenseCategoryControllerBase {
  constructor(protected readonly service: ExpenseCategoryService) {
    super(service);
  }
}
