import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type OrganizationRecurringExpenseWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  startDay?: IntFilter;
  startMonth?: IntFilter;
  startYear?: IntFilter;
  startDate?: DateTimeFilter;
  endDay?: IntNullableFilter;
  endMonth?: IntNullableFilter;
  endYear?: IntNullableFilter;
  endDate?: DateTimeNullableFilter;
  categoryName?: StringFilter;
  value?: DecimalFilter;
  currency?: StringFilter;
  splitExpense?: BooleanNullableFilter;
  parentRecurringExpenseId?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};