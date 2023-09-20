import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type ReportCategoryWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  iconClass?: StringNullableFilter;
  report?: ReportListRelationFilter;
};
