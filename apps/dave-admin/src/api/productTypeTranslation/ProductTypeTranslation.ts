import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { ProductType } from "../productType/ProductType";

export type ProductTypeTranslation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  languageCode: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
  productType?: ProductType;
};
