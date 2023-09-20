import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserOrganizationUpdateInput = {
  isDefault?: boolean;
  isActive?: boolean;
  user?: UserWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
