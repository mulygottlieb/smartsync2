import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";

export type OrganizationSprintWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  goal?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
  length?: IntFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  dayStart?: IntNullableFilter;
  task?: TaskListRelationFilter;
  isActive?: BooleanNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  organizationProject?: OrganizationProjectWhereUniqueInput;
};
