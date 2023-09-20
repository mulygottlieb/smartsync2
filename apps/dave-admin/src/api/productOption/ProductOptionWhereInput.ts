import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductOptionGroupWhereUniqueInput } from "../productOptionGroup/ProductOptionGroupWhereUniqueInput";
import { ProductOptionTranslationListRelationFilter } from "../productOptionTranslation/ProductOptionTranslationListRelationFilter";
import { ProductVariantOptionsProductOptionListRelationFilter } from "../productVariantOptionsProductOption/ProductVariantOptionsProductOptionListRelationFilter";

export type ProductOptionWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  code?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  productOptionGroup?: ProductOptionGroupWhereUniqueInput;
  productOptionTranslation?: ProductOptionTranslationListRelationFilter;
  productVariantOptionsProductOption?: ProductVariantOptionsProductOptionListRelationFilter;
};
