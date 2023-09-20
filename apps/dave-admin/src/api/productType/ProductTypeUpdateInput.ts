import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductUpdateManyWithoutProductTypesInput } from "./ProductUpdateManyWithoutProductTypesInput";
import { ProductTypeTranslationUpdateManyWithoutProductTypesInput } from "./ProductTypeTranslationUpdateManyWithoutProductTypesInput";

export type ProductTypeUpdateInput = {
  icon?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  product?: ProductUpdateManyWithoutProductTypesInput;
  productTypeTranslation?: ProductTypeTranslationUpdateManyWithoutProductTypesInput;
};
