import { TagIncomeWhereInput } from "./TagIncomeWhereInput";
import { TagIncomeOrderByInput } from "./TagIncomeOrderByInput";

export type TagIncomeFindManyArgs = {
  where?: TagIncomeWhereInput;
  orderBy?: Array<TagIncomeOrderByInput>;
  skip?: number;
  take?: number;
};
