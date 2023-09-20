import { Expense as TExpense } from "../api/expense/Expense";

export const EXPENSE_TITLE_FIELD = "typeOfExpense";

export const ExpenseTitle = (record: TExpense): string => {
  return record.typeOfExpense?.toString() || String(record.id);
};
