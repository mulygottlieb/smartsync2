import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { IncomeWhereUniqueInput } from "../income/IncomeWhereUniqueInput";

export type TagIncomeUpdateInput = {
  tag?: TagWhereUniqueInput;
  income?: IncomeWhereUniqueInput;
};
