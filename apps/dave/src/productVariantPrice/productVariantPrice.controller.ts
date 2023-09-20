import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductVariantPriceService } from "./productVariantPrice.service";
import { ProductVariantPriceControllerBase } from "./base/productVariantPrice.controller.base";

@swagger.ApiTags("productVariantPrices")
@common.Controller("productVariantPrices")
export class ProductVariantPriceController extends ProductVariantPriceControllerBase {
  constructor(protected readonly service: ProductVariantPriceService) {
    super(service);
  }
}
