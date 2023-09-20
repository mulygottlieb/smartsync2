import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RequestApprovalWhereUniqueInput } from "../requestApproval/RequestApprovalWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";

export type RequestApprovalTeamWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  status?: IntNullableFilter;
  requestApproval?: RequestApprovalWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  organizationTeam?: OrganizationTeamWhereUniqueInput;
};
