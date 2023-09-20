import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type FeatureOrganizationCreateInput = {
  isEnabled: boolean;
  organization?: OrganizationWhereUniqueInput | null;
  feature: FeatureWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
};
