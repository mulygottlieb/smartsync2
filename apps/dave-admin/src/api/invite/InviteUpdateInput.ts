import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InviteOrganizationContactUpdateManyWithoutInvitesInput } from "./InviteOrganizationContactUpdateManyWithoutInvitesInput";
import { InviteOrganizationDepartmentUpdateManyWithoutInvitesInput } from "./InviteOrganizationDepartmentUpdateManyWithoutInvitesInput";
import { InviteOrganizationProjectUpdateManyWithoutInvitesInput } from "./InviteOrganizationProjectUpdateManyWithoutInvitesInput";
import { InviteOrganizationTeamUpdateManyWithoutInvitesInput } from "./InviteOrganizationTeamUpdateManyWithoutInvitesInput";

export type InviteUpdateInput = {
  token?: string;
  email?: string;
  status?: string;
  expireDate?: Date | null;
  actionDate?: Date | null;
  code?: number | null;
  fullName?: string | null;
  userInviteInvitedByIdTouser?: UserWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  role?: RoleWhereUniqueInput | null;
  userInviteUserIdTouser?: UserWhereUniqueInput | null;
  inviteOrganizationContact?: InviteOrganizationContactUpdateManyWithoutInvitesInput;
  inviteOrganizationDepartment?: InviteOrganizationDepartmentUpdateManyWithoutInvitesInput;
  inviteOrganizationProject?: InviteOrganizationProjectUpdateManyWithoutInvitesInput;
  inviteOrganizationTeam?: InviteOrganizationTeamUpdateManyWithoutInvitesInput;
};
