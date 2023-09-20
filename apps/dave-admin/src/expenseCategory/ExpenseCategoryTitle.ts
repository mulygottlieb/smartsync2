import { ExpenseCategory as TExpenseCategory } from "../api/expenseCategory/ExpenseCategory";

export const EXPENSECATEGORY_TITLE_FIELD = "name";

export const ExpenseCategoryTitle = (record: TExpenseCategory): string => {
  return record.name?.toString() || String(record.id);
};
