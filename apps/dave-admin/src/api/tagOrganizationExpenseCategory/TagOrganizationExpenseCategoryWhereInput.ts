import { ExpenseCategoryWhereUniqueInput } from "../expenseCategory/ExpenseCategoryWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagOrganizationExpenseCategoryWhereInput = {
  expenseCategory?: ExpenseCategoryWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
