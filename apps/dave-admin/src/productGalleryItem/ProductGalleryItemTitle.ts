import { ProductGalleryItem as TProductGalleryItem } from "../api/productGalleryItem/ProductGalleryItem";

export const PRODUCTGALLERYITEM_TITLE_FIELD = "id";

export const ProductGalleryItemTitle = (
  record: TProductGalleryItem
): string => {
  return record.id?.toString() || String(record.id);
};
