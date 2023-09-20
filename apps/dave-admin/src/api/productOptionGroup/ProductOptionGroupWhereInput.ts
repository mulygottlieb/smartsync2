import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { ProductOptionListRelationFilter } from "../productOption/ProductOptionListRelationFilter";
import { ProductOptionGroupTranslationListRelationFilter } from "../productOptionGroupTranslation/ProductOptionGroupTranslationListRelationFilter";

export type ProductOptionGroupWhereInput = {
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  name?: StringFilter;
  tenant?: TenantWhereUniqueInput;
  organization?: OrganizationWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  productOption?: ProductOptionListRelationFilter;
  productOptionGroupTranslation?: ProductOptionGroupTranslationListRelationFilter;
};
