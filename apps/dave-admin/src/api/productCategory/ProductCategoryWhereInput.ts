import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { ProductCategoryTranslationListRelationFilter } from "../productCategoryTranslation/ProductCategoryTranslationListRelationFilter";

export type ProductCategoryWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  imageUrl?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  imageAsset?: ImageAssetWhereUniqueInput;
  product?: ProductListRelationFilter;
  productCategoryTranslation?: ProductCategoryTranslationListRelationFilter;
};
