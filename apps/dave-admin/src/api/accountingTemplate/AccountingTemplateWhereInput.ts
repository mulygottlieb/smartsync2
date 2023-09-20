import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AccountingTemplateWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  languageCode?: StringFilter;
  mjml?: StringNullableFilter;
  hbs?: StringFilter;
  templateType?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
