import { ExpenseWhereUniqueInput } from "../expense/ExpenseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagExpenseWhereInput = {
  expense?: ExpenseWhereUniqueInput;
  tag?: TagWhereUniqueInput;
  id?: StringFilter;
};
