import { Tenant } from "../tenant/Tenant";
import { Invite } from "../invite/Invite";
import { OrganizationTeamEmployee } from "../organizationTeamEmployee/OrganizationTeamEmployee";
import { RolePermission } from "../rolePermission/RolePermission";
import { User } from "../user/User";

export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  isSystem: boolean;
  tenant?: Tenant | null;
  invite?: Array<Invite>;
  organizationTeamEmployee?: Array<OrganizationTeamEmployee>;
  rolePermission?: Array<RolePermission>;
  user?: Array<User>;
};
