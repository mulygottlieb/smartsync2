import { Tenant } from "../tenant/Tenant";
import { Role } from "../role/Role";

export type RolePermission = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  permission: string;
  enabled: boolean | null;
  description: string | null;
  tenant?: Tenant | null;
  role?: Role;
};
