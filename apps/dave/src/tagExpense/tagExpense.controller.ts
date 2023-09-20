import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagExpenseService } from "./tagExpense.service";
import { TagExpenseControllerBase } from "./base/tagExpense.controller.base";

@swagger.ApiTags("tagExpenses")
@common.Controller("tagExpenses")
export class TagExpenseController extends TagExpenseControllerBase {
  constructor(protected readonly service: TagExpenseService) {
    super(service);
  }
}
