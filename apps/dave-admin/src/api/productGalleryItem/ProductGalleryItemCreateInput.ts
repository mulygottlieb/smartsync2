import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductGalleryItemCreateInput = {
  imageAsset: ImageAssetWhereUniqueInput;
  product: ProductWhereUniqueInput;
};
