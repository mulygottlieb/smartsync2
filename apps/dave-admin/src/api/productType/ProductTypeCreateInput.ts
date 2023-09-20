import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductCreateNestedManyWithoutProductTypesInput } from "./ProductCreateNestedManyWithoutProductTypesInput";
import { ProductTypeTranslationCreateNestedManyWithoutProductTypesInput } from "./ProductTypeTranslationCreateNestedManyWithoutProductTypesInput";

export type ProductTypeCreateInput = {
  icon?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  product?: ProductCreateNestedManyWithoutProductTypesInput;
  productTypeTranslation?: ProductTypeTranslationCreateNestedManyWithoutProductTypesInput;
};
