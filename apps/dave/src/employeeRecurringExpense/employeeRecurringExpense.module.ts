import { Module } from "@nestjs/common";
import { EmployeeRecurringExpenseModuleBase } from "./base/employeeRecurringExpense.module.base";
import { EmployeeRecurringExpenseService } from "./employeeRecurringExpense.service";
import { EmployeeRecurringExpenseController } from "./employeeRecurringExpense.controller";
import { EmployeeRecurringExpenseResolver } from "./employeeRecurringExpense.resolver";

@Module({
  imports: [EmployeeRecurringExpenseModuleBase],
  controllers: [EmployeeRecurringExpenseController],
  providers: [
    EmployeeRecurringExpenseService,
    EmployeeRecurringExpenseResolver,
  ],
  exports: [EmployeeRecurringExpenseService],
})
export class EmployeeRecurringExpenseModule {}
