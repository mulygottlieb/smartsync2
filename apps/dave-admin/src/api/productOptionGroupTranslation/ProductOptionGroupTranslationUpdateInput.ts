import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductOptionGroupWhereUniqueInput } from "../productOptionGroup/ProductOptionGroupWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductOptionGroupTranslationUpdateInput = {
  name?: string;
  languageCode?: string;
  organization?: OrganizationWhereUniqueInput | null;
  productOptionGroup?: ProductOptionGroupWhereUniqueInput;
  tenant?: TenantWhereUniqueInput | null;
};
