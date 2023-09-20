import { ImageAssetWhereInput } from "./ImageAssetWhereInput";
import { ImageAssetOrderByInput } from "./ImageAssetOrderByInput";

export type ImageAssetFindManyArgs = {
  where?: ImageAssetWhereInput;
  orderBy?: Array<ImageAssetOrderByInput>;
  skip?: number;
  take?: number;
};
