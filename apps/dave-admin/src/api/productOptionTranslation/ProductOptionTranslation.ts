import { Organization } from "../organization/Organization";
import { Tenant } from "../tenant/Tenant";
import { ProductOption } from "../productOption/ProductOption";

export type ProductOptionTranslation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  languageCode: string;
  organization?: Organization | null;
  tenant?: Tenant | null;
  productOption?: ProductOption;
};
