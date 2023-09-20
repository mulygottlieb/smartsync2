import { Tenant } from "../tenant/Tenant";
import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Organization } from "../organization/Organization";
import { OrganizationProject } from "../organizationProject/OrganizationProject";

export type TaskPriority = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  value: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  isSystem: boolean;
  tenant?: Tenant | null;
  organizationTeam?: OrganizationTeam | null;
  organization?: Organization | null;
  organizationProject?: OrganizationProject | null;
};
