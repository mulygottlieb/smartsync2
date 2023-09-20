import { Module } from "@nestjs/common";
import { ProductGalleryItemModuleBase } from "./base/productGalleryItem.module.base";
import { ProductGalleryItemService } from "./productGalleryItem.service";
import { ProductGalleryItemController } from "./productGalleryItem.controller";
import { ProductGalleryItemResolver } from "./productGalleryItem.resolver";

@Module({
  imports: [ProductGalleryItemModuleBase],
  controllers: [ProductGalleryItemController],
  providers: [ProductGalleryItemService, ProductGalleryItemResolver],
  exports: [ProductGalleryItemService],
})
export class ProductGalleryItemModule {}
