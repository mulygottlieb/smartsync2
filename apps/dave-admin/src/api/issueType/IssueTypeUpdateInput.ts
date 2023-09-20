import { OrganizationProjectWhereUniqueInput } from "../organizationProject/OrganizationProjectWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { OrganizationTeamWhereUniqueInput } from "../organizationTeam/OrganizationTeamWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type IssueTypeUpdateInput = {
  name?: string;
  value?: string;
  description?: string | null;
  icon?: string | null;
  color?: string | null;
  isSystem?: boolean;
  organizationProject?: OrganizationProjectWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  organizationTeam?: OrganizationTeamWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
};
