import { ExpenseCategoryWhereUniqueInput } from "../expenseCategory/ExpenseCategoryWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationExpenseCategoryUpdateInput = {
  expenseCategory?: ExpenseCategoryWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
