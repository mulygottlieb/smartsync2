import { ExpenseWhereUniqueInput } from "../expense/ExpenseWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type TagExpenseCreateInput = {
  expense: ExpenseWhereUniqueInput;
  tag: TagWhereUniqueInput;
};
