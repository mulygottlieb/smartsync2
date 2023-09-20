import { ImageAsset } from "../imageAsset/ImageAsset";
import { Product } from "../product/Product";

export type ProductGalleryItem = {
  imageAsset?: ImageAsset;
  product?: Product;
  id: string;
};
