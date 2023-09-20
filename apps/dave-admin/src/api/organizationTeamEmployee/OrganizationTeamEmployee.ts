import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Employee } from "../employee/Employee";
import { Role } from "../role/Role";
import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";

export type OrganizationTeamEmployee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isTrackingEnabled: boolean | null;
  organizationTeam?: OrganizationTeam;
  employee?: Employee;
  role?: Role | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
};
