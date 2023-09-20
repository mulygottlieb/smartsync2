import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InviteOrganizationContactCreateNestedManyWithoutInvitesInput } from "./InviteOrganizationContactCreateNestedManyWithoutInvitesInput";
import { InviteOrganizationDepartmentCreateNestedManyWithoutInvitesInput } from "./InviteOrganizationDepartmentCreateNestedManyWithoutInvitesInput";
import { InviteOrganizationProjectCreateNestedManyWithoutInvitesInput } from "./InviteOrganizationProjectCreateNestedManyWithoutInvitesInput";
import { InviteOrganizationTeamCreateNestedManyWithoutInvitesInput } from "./InviteOrganizationTeamCreateNestedManyWithoutInvitesInput";

export type InviteCreateInput = {
  token: string;
  email: string;
  status: string;
  expireDate?: Date | null;
  actionDate?: Date | null;
  code?: number | null;
  fullName?: string | null;
  userInviteInvitedByIdTouser?: UserWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  role?: RoleWhereUniqueInput | null;
  userInviteUserIdTouser?: UserWhereUniqueInput | null;
  inviteOrganizationContact?: InviteOrganizationContactCreateNestedManyWithoutInvitesInput;
  inviteOrganizationDepartment?: InviteOrganizationDepartmentCreateNestedManyWithoutInvitesInput;
  inviteOrganizationProject?: InviteOrganizationProjectCreateNestedManyWithoutInvitesInput;
  inviteOrganizationTeam?: InviteOrganizationTeamCreateNestedManyWithoutInvitesInput;
};
