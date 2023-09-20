import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrganizationContactWhereUniqueInput } from "../organizationContact/OrganizationContactWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TagIncomeListRelationFilter } from "../tagIncome/TagIncomeListRelationFilter";

export type IncomeWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  amount?: DecimalFilter;
  currency?: StringFilter;
  valueDate?: DateTimeNullableFilter;
  notes?: StringNullableFilter;
  isBonus?: BooleanNullableFilter;
  reference?: StringNullableFilter;
  organizationContact?: OrganizationContactWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
  tagIncome?: TagIncomeListRelationFilter;
};
