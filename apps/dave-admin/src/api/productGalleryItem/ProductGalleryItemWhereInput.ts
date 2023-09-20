import { ImageAssetWhereUniqueInput } from "../imageAsset/ImageAssetWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ProductGalleryItemWhereInput = {
  imageAsset?: ImageAssetWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  id?: StringFilter;
};
