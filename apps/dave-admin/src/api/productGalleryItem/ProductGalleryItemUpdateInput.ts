import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProductGalleryItemUpdateInput = {
  imageAsset?: ImageAssetWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
