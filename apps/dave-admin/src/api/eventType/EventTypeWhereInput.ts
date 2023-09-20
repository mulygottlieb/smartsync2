import { TagEventTypeListRelationFilter } from "../tagEventType/TagEventTypeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type EventTypeWhereInput = {
  tagEventType?: TagEventTypeListRelationFilter;
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  duration?: DecimalFilter;
  durationUnit?: StringNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
