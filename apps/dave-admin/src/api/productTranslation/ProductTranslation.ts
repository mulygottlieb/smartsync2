import { Tenant } from "../tenant/Tenant";
import { Product } from "../product/Product";
import { Organization } from "../organization/Organization";

export type ProductTranslation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  languageCode: string;
  tenant?: Tenant | null;
  product?: Product;
  organization?: Organization | null;
};
