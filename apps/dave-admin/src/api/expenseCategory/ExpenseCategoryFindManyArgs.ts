import { ExpenseCategoryWhereInput } from "./ExpenseCategoryWhereInput";
import { ExpenseCategoryOrderByInput } from "./ExpenseCategoryOrderByInput";

export type ExpenseCategoryFindManyArgs = {
  where?: ExpenseCategoryWhereInput;
  orderBy?: Array<ExpenseCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
