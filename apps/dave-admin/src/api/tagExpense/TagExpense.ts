import { Expense } from "../expense/Expense";
import { Tag } from "../tag/Tag";

export type TagExpense = {
  expense?: Expense;
  tag?: Tag;
  id: string;
};
