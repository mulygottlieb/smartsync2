import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApprovalPolicyWhereUniqueInput } from "../approvalPolicy/ApprovalPolicyWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { RequestApprovalEmployeeListRelationFilter } from "../requestApprovalEmployee/RequestApprovalEmployeeListRelationFilter";
import { RequestApprovalTeamListRelationFilter } from "../requestApprovalTeam/RequestApprovalTeamListRelationFilter";
import { TagRequestApprovalListRelationFilter } from "../tagRequestApproval/TagRequestApprovalListRelationFilter";

export type RequestApprovalWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  status?: IntNullableFilter;
  createdBy?: StringNullableFilter;
  createdByName?: StringNullableFilter;
  minCount?: IntNullableFilter;
  requestId?: StringNullableFilter;
  requestType?: StringNullableFilter;
  approvalPolicy?: ApprovalPolicyWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  requestApprovalEmployee?: RequestApprovalEmployeeListRelationFilter;
  requestApprovalTeam?: RequestApprovalTeamListRelationFilter;
  tagRequestApproval?: TagRequestApprovalListRelationFilter;
};
