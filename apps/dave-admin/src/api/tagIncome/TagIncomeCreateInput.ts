import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { IncomeWhereUniqueInput } from "../income/IncomeWhereUniqueInput";

export type TagIncomeCreateInput = {
  tag: TagWhereUniqueInput;
  income: IncomeWhereUniqueInput;
};
