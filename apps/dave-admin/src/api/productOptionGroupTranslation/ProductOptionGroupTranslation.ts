import { Organization } from "../organization/Organization";
import { ProductOptionGroup } from "../productOptionGroup/ProductOptionGroup";
import { Tenant } from "../tenant/Tenant";

export type ProductOptionGroupTranslation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  languageCode: string;
  organization?: Organization | null;
  productOptionGroup?: ProductOptionGroup;
  tenant?: Tenant | null;
};
