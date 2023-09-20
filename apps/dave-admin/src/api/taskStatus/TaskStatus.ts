import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Organization } from "../organization/Organization";
import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { Tenant } from "../tenant/Tenant";

export type TaskStatus = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  value: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  isSystem: boolean;
  organizationTeam?: OrganizationTeam | null;
  organization?: Organization | null;
  organizationProject?: OrganizationProject | null;
  tenant?: Tenant | null;
};
