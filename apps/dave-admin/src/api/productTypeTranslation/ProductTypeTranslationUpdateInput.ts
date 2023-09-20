import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductTypeWhereUniqueInput } from "../productType/ProductTypeWhereUniqueInput";

export type ProductTypeTranslationUpdateInput = {
  name?: string;
  description?: string | null;
  languageCode?: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  productType?: ProductTypeWhereUniqueInput;
};
