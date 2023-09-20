import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { Product } from "../product/Product";
import { ProductTypeTranslation } from "../productTypeTranslation/ProductTypeTranslation";

export type ProductType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  icon: string | null;
  organization?: Organization | null;
  tenant?: Tenant | null;
  product?: Array<Product>;
  productTypeTranslation?: Array<ProductTypeTranslation>;
};
