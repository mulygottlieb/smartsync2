import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { ProductTypeTranslationListRelationFilter } from "../productTypeTranslation/ProductTypeTranslationListRelationFilter";

export type ProductTypeWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  icon?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  product?: ProductListRelationFilter;
  productTypeTranslation?: ProductTypeTranslationListRelationFilter;
};
