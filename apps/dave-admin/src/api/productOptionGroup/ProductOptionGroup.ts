import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { Product } from "../product/Product";
import { ProductOption } from "../productOption/ProductOption";
import { ProductOptionGroupTranslation } from "../productOptionGroupTranslation/ProductOptionGroupTranslation";

export type ProductOptionGroup = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  tenant?: Tenant | null;
  organization?: Organization | null;
  product?: Product;
  productOption?: Array<ProductOption>;
  productOptionGroupTranslation?: Array<ProductOptionGroupTranslation>;
};
