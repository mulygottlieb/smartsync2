import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductOptionCreateNestedManyWithoutProductOptionGroupsInput } from "./ProductOptionCreateNestedManyWithoutProductOptionGroupsInput";
import { ProductOptionGroupTranslationCreateNestedManyWithoutProductOptionGroupsInput } from "./ProductOptionGroupTranslationCreateNestedManyWithoutProductOptionGroupsInput";

export type ProductOptionGroupCreateInput = {
  name: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  product: ProductWhereUniqueInput;
  productOption?: ProductOptionCreateNestedManyWithoutProductOptionGroupsInput;
  productOptionGroupTranslation?: ProductOptionGroupTranslationCreateNestedManyWithoutProductOptionGroupsInput;
};
