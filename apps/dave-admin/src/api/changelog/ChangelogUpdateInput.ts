import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ChangelogUpdateInput = {
  icon?: string | null;
  title?: string | null;
  date?: Date;
  content?: string;
  learnMoreUrl?: string | null;
  isFeature?: boolean | null;
  imageUrl?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
