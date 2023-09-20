import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type OrganizationLanguageCreateInput = {
  name: string;
  level: string;
  language: LanguageWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
};
