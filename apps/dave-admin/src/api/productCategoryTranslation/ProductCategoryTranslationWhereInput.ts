import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ProductCategoryTranslationWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  description?: StringNullableFilter;
  languageCode?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  productCategory?: ProductCategoryWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
};
