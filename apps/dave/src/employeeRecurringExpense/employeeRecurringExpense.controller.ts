import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeRecurringExpenseService } from "./employeeRecurringExpense.service";
import { EmployeeRecurringExpenseControllerBase } from "./base/employeeRecurringExpense.controller.base";

@swagger.ApiTags("employeeRecurringExpenses")
@common.Controller("employeeRecurringExpenses")
export class EmployeeRecurringExpenseController extends EmployeeRecurringExpenseControllerBase {
  constructor(protected readonly service: EmployeeRecurringExpenseService) {
    super(service);
  }
}
