import { ProductGalleryItemWhereInput } from "./ProductGalleryItemWhereInput";
import { ProductGalleryItemOrderByInput } from "./ProductGalleryItemOrderByInput";

export type ProductGalleryItemFindManyArgs = {
  where?: ProductGalleryItemWhereInput;
  orderBy?: Array<ProductGalleryItemOrderByInput>;
  skip?: number;
  take?: number;
};
