import * as graphql from "@nestjs/graphql";
import { EmployeeRecurringExpenseResolverBase } from "./base/employeeRecurringExpense.resolver.base";
import { EmployeeRecurringExpense } from "./base/EmployeeRecurringExpense";
import { EmployeeRecurringExpenseService } from "./employeeRecurringExpense.service";

@graphql.Resolver(() => EmployeeRecurringExpense)
export class EmployeeRecurringExpenseResolver extends EmployeeRecurringExpenseResolverBase {
  constructor(protected readonly service: EmployeeRecurringExpenseService) {
    super(service);
  }
}
