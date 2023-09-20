import { Module } from "@nestjs/common";
import { ImageAssetModuleBase } from "./base/imageAsset.module.base";
import { ImageAssetService } from "./imageAsset.service";
import { ImageAssetController } from "./imageAsset.controller";
import { ImageAssetResolver } from "./imageAsset.resolver";

@Module({
  imports: [ImageAssetModuleBase],
  controllers: [ImageAssetController],
  providers: [ImageAssetService, ImageAssetResolver],
  exports: [ImageAssetService],
})
export class ImageAssetModule {}
