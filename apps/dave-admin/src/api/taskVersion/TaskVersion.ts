import { Tenant } from "../tenant/Tenant";
import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Organization } from "../organization/Organization";

export type TaskVersion = {
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
  organizationProject?: OrganizationProject | null;
  organizationTeam?: OrganizationTeam | null;
  organization?: Organization | null;
};
