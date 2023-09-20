import { ExpenseCategory } from "../expenseCategory/ExpenseCategory";
import { Tag } from "../tag/Tag";

export type TagOrganizationExpenseCategory = {
  expenseCategory?: ExpenseCategory;
  tag?: Tag;
  id: string;
};
