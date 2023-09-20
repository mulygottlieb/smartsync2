import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ProductTranslationCreateInput = {
  name: string;
  description?: string | null;
  languageCode: string;
  tenant?: TenantWhereUniqueInput | null;
  product: ProductWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
};
