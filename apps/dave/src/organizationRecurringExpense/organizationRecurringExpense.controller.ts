import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationRecurringExpenseService } from "./organizationRecurringExpense.service";
import { OrganizationRecurringExpenseControllerBase } from "./base/organizationRecurringExpense.controller.base";

@swagger.ApiTags("organizationRecurringExpenses")
@common.Controller("organizationRecurringExpenses")
export class OrganizationRecurringExpenseController extends OrganizationRecurringExpenseControllerBase {
  constructor(protected readonly service: OrganizationRecurringExpenseService) {
    super(service);
  }
}
