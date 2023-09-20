import { Organization } from "../organization/Organization";
import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Tenant } from "../tenant/Tenant";

export type TaskSize = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  value: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  isSystem: boolean;
  organization?: Organization | null;
  organizationProject?: OrganizationProject | null;
  organizationTeam?: OrganizationTeam | null;
  tenant?: Tenant | null;
};
