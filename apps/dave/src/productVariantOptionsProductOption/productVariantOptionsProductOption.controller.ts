import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductVariantOptionsProductOptionService } from "./productVariantOptionsProductOption.service";
import { ProductVariantOptionsProductOptionControllerBase } from "./base/productVariantOptionsProductOption.controller.base";

@swagger.ApiTags("productVariantOptionsProductOptions")
@common.Controller("productVariantOptionsProductOptions")
export class ProductVariantOptionsProductOptionController extends ProductVariantOptionsProductOptionControllerBase {
  constructor(
    protected readonly service: ProductVariantOptionsProductOptionService
  ) {
    super(service);
  }
}
