import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductOptionUpdateManyWithoutProductOptionGroupsInput } from "./ProductOptionUpdateManyWithoutProductOptionGroupsInput";
import { ProductOptionGroupTranslationUpdateManyWithoutProductOptionGroupsInput } from "./ProductOptionGroupTranslationUpdateManyWithoutProductOptionGroupsInput";

export type ProductOptionGroupUpdateInput = {
  name?: string;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  product?: ProductWhereUniqueInput;
  productOption?: ProductOptionUpdateManyWithoutProductOptionGroupsInput;
  productOptionGroupTranslation?: ProductOptionGroupTranslationUpdateManyWithoutProductOptionGroupsInput;
};
