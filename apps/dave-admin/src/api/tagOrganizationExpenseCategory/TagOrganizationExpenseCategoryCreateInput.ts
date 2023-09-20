import { ExpenseCategoryWhereUniqueInput } from "../expenseCategory/ExpenseCategoryWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagOrganizationExpenseCategoryCreateInput = {
  expenseCategory: ExpenseCategoryWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
