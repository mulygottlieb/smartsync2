import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductOptionService } from "./productOption.service";
import { ProductOptionControllerBase } from "./base/productOption.controller.base";

@swagger.ApiTags("productOptions")
@common.Controller("productOptions")
export class ProductOptionController extends ProductOptionControllerBase {
  constructor(protected readonly service: ProductOptionService) {
    super(service);
  }
}
