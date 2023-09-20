import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TimeOffPolicyEmployeeListRelationFilter } from "../timeOffPolicyEmployee/TimeOffPolicyEmployeeListRelationFilter";
import { TimeOffRequestListRelationFilter } from "../timeOffRequest/TimeOffRequestListRelationFilter";

export type TimeOffPolicyWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  requiresApproval?: BooleanFilter;
  paid?: BooleanFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  timeOffPolicyEmployee?: TimeOffPolicyEmployeeListRelationFilter;
  timeOffRequest?: TimeOffRequestListRelationFilter;
};
