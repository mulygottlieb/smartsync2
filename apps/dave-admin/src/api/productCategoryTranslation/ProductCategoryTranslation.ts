import { Tenant } from "../tenant/Tenant";
import { ProductCategory } from "../productCategory/ProductCategory";
import { Organization } from "../organization/Organization";

export type ProductCategoryTranslation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  languageCode: string;
  tenant?: Tenant | null;
  productCategory?: ProductCategory;
  organization?: Organization | null;
};
