import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductCreateNestedManyWithoutProductCategoriesInput } from "./ProductCreateNestedManyWithoutProductCategoriesInput";
import { ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput } from "./ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput";

export type ProductCategoryCreateInput = {
  imageUrl?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  product?: ProductCreateNestedManyWithoutProductCategoriesInput;
  productCategoryTranslation?: ProductCategoryTranslationCreateNestedManyWithoutProductCategoriesInput;
};
