import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { OrganizationProject } from "../organizationProject/OrganizationProject";

export type TaskRelatedIssueType = {
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
  tenant?: Tenant | null;
  organization?: Organization | null;
  organizationProject?: OrganizationProject | null;
};
