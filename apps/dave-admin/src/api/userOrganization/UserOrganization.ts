import { User } from "../user/User";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";

export type UserOrganization = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isDefault: boolean;
  isActive: boolean;
  user?: User;
  tenant?: Tenant | null;
  organization?: Organization | null;
};
