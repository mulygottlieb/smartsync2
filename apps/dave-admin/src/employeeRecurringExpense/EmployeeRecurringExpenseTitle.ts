import { EmployeeRecurringExpense as TEmployeeRecurringExpense } from "../api/employeeRecurringExpense/EmployeeRecurringExpense";

export const EMPLOYEERECURRINGEXPENSE_TITLE_FIELD = "categoryName";

export const EmployeeRecurringExpenseTitle = (
  record: TEmployeeRecurringExpense
): string => {
  return record.categoryName?.toString() || String(record.id);
};
