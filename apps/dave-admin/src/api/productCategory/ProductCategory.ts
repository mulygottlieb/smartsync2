import { Tenant } from "../tenant/Tenant";
import { Organization } from "../organization/Organization";
import { ImageAsset } from "../imageAsset/ImageAsset";
import { Product } from "../product/Product";
import { ProductCategoryTranslation } from "../productCategoryTranslation/ProductCategoryTranslation";

export type ProductCategory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  imageUrl: string | null;
  tenant?: Tenant | null;
  organization?: Organization | null;
  imageAsset?: ImageAsset | null;
  product?: Array<Product>;
  productCategoryTranslation?: Array<ProductCategoryTranslation>;
};
