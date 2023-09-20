import { OrganizationProject } from "../organizationProject/OrganizationProject";
import { Organization } from "../organization/Organization";
import { ImageAsset } from "../imageAsset/ImageAsset";
import { OrganizationTeam } from "../organizationTeam/OrganizationTeam";
import { Tenant } from "../tenant/Tenant";

export type IssueType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  value: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  isSystem: boolean;
  organizationProject?: OrganizationProject | null;
  organization?: Organization | null;
  imageAsset?: ImageAsset | null;
  organizationTeam?: OrganizationTeam | null;
  tenant?: Tenant | null;
};
