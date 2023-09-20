import { ImageAsset as TImageAsset } from "../api/imageAsset/ImageAsset";

export const IMAGEASSET_TITLE_FIELD = "name";

export const ImageAssetTitle = (record: TImageAsset): string => {
  return record.name?.toString() || String(record.id);
};
