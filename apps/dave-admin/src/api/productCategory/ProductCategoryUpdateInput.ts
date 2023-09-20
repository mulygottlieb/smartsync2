import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductUpdateManyWithoutProductCategoriesInput } from "./ProductUpdateManyWithoutProductCategoriesInput";
import { ProductCategoryTranslationUpdateManyWithoutProductCategoriesInput } from "./ProductCategoryTranslationUpdateManyWithoutProductCategoriesInput";

export type ProductCategoryUpdateInput = {
  imageUrl?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  product?: ProductUpdateManyWithoutProductCategoriesInput;
  productCategoryTranslation?: ProductCategoryTranslationUpdateManyWithoutProductCategoriesInput;
};
