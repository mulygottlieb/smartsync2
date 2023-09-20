import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductOptionWhereUniqueInput } from "../productOption/ProductOptionWhereUniqueInput";

export type ProductOptionTranslationCreateInput = {
  name: string;
  description?: string | null;
  languageCode: string;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  productOption: ProductOptionWhereUniqueInput;
};
