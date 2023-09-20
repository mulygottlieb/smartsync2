import { TagExpenseWhereInput } from "./TagExpenseWhereInput";
import { TagExpenseOrderByInput } from "./TagExpenseOrderByInput";

export type TagExpenseFindManyArgs = {
  where?: TagExpenseWhereInput;
  orderBy?: Array<TagExpenseOrderByInput>;
  skip?: number;
  take?: number;
};
