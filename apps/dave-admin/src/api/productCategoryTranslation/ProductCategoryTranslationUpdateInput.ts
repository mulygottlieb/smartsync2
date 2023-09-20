import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ProductCategoryTranslationUpdateInput = {
  name?: string;
  description?: string | null;
  languageCode?: string;
  tenant?: TenantWhereUniqueInput | null;
  productCategory?: ProductCategoryWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput | null;
};
