import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ReportCategoryWhereUniqueInput } from "../reportCategory/ReportCategoryWhereUniqueInput";
import { ReportOrganizationListRelationFilter } from "../reportOrganization/ReportOrganizationListRelationFilter";

export type ReportWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  slug?: StringNullableFilter;
  description?: StringNullableFilter;
  image?: StringNullableFilter;
  iconClass?: StringNullableFilter;
  showInMenu?: BooleanFilter;
  reportCategory?: ReportCategoryWhereUniqueInput;
  reportOrganization?: ReportOrganizationListRelationFilter;
};
