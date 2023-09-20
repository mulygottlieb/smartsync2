import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ProductTypeWhereUniqueInput } from "../productType/ProductTypeWhereUniqueInput";
import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductCategoryWhereUniqueInput } from "../productCategory/ProductCategoryWhereUniqueInput";
import { InvoiceItemUpdateManyWithoutProductsInput } from "./InvoiceItemUpdateManyWithoutProductsInput";
import { ProductGalleryItemUpdateManyWithoutProductsInput } from "./ProductGalleryItemUpdateManyWithoutProductsInput";
import { ProductOptionGroupUpdateManyWithoutProductsInput } from "./ProductOptionGroupUpdateManyWithoutProductsInput";
import { ProductTranslationUpdateManyWithoutProductsInput } from "./ProductTranslationUpdateManyWithoutProductsInput";
import { ProductVariantUpdateManyWithoutProductsInput } from "./ProductVariantUpdateManyWithoutProductsInput";
import { TagProductUpdateManyWithoutProductsInput } from "./TagProductUpdateManyWithoutProductsInput";
import { WarehouseProductUpdateManyWithoutProductsInput } from "./WarehouseProductUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  enabled?: boolean;
  code?: string;
  imageUrl?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  organization?: OrganizationWhereUniqueInput | null;
  productType?: ProductTypeWhereUniqueInput | null;
  imageAsset?: ImageAssetWhereUniqueInput | null;
  productCategory?: ProductCategoryWhereUniqueInput | null;
  invoiceItem?: InvoiceItemUpdateManyWithoutProductsInput;
  productGalleryItem?: ProductGalleryItemUpdateManyWithoutProductsInput;
  productOptionGroup?: ProductOptionGroupUpdateManyWithoutProductsInput;
  productTranslation?: ProductTranslationUpdateManyWithoutProductsInput;
  productVariant?: ProductVariantUpdateManyWithoutProductsInput;
  tagProduct?: TagProductUpdateManyWithoutProductsInput;
  warehouseProduct?: WarehouseProductUpdateManyWithoutProductsInput;
};
