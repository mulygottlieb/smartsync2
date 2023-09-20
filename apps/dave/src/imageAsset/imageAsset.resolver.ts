import * as graphql from "@nestjs/graphql";
import { ImageAssetResolverBase } from "./base/imageAsset.resolver.base";
import { ImageAsset } from "./base/ImageAsset";
import { ImageAssetService } from "./imageAsset.service";

@graphql.Resolver(() => ImageAsset)
export class ImageAssetResolver extends ImageAssetResolverBase {
  constructor(protected readonly service: ImageAssetService) {
    super(service);
  }
}
