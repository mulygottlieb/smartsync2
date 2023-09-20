import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageAssetService } from "./imageAsset.service";
import { ImageAssetControllerBase } from "./base/imageAsset.controller.base";

@swagger.ApiTags("imageAssets")
@common.Controller("imageAssets")
export class ImageAssetController extends ImageAssetControllerBase {
  constructor(protected readonly service: ImageAssetService) {
    super(service);
  }
}
