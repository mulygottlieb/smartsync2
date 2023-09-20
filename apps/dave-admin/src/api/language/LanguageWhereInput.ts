import { OrganizationLanguageListRelationFilter } from "../organizationLanguage/OrganizationLanguageListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type LanguageWhereInput = {
  organizationLanguage?: OrganizationLanguageListRelationFilter;
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  code?: StringNullableFilter;
  isSystem?: BooleanNullableFilter;
  description?: StringNullableFilter;
  color?: StringFilter;
};
