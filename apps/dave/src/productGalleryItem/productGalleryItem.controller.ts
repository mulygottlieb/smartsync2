import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductGalleryItemService } from "./productGalleryItem.service";
import { ProductGalleryItemControllerBase } from "./base/productGalleryItem.controller.base";

@swagger.ApiTags("productGalleryItems")
@common.Controller("productGalleryItems")
export class ProductGalleryItemController extends ProductGalleryItemControllerBase {
  constructor(protected readonly service: ProductGalleryItemService) {
    super(service);
  }
}
