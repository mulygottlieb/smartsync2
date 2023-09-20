import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { IncomeWhereUniqueInput } from "../income/IncomeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TagIncomeWhereInput = {
  tag?: TagWhereUniqueInput;
  income?: IncomeWhereUniqueInput;
  id?: StringFilter;
};
