import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type GoalTimeFrameWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  status?: StringFilter;
  startDate?: DateTimeFilter;
  endDate?: DateTimeFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
};
