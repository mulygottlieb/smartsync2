import { ExpenseWhereUniqueInput } from "../expense/ExpenseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagExpenseUpdateInput = {
  expense?: ExpenseWhereUniqueInput;
  tag?: TagWhereUniqueInput;
};
