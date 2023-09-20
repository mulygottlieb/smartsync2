import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductTypeTranslationService } from "./productTypeTranslation.service";
import { ProductTypeTranslationControllerBase } from "./base/productTypeTranslation.controller.base";

@swagger.ApiTags("productTypeTranslations")
@common.Controller("productTypeTranslations")
export class ProductTypeTranslationController extends ProductTypeTranslationControllerBase {
  constructor(protected readonly service: ProductTypeTranslationService) {
    super(service);
  }
}
