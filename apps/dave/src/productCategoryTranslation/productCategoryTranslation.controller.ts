import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductCategoryTranslationService } from "./productCategoryTranslation.service";
import { ProductCategoryTranslationControllerBase } from "./base/productCategoryTranslation.controller.base";

@swagger.ApiTags("productCategoryTranslations")
@common.Controller("productCategoryTranslations")
export class ProductCategoryTranslationController extends ProductCategoryTranslationControllerBase {
  constructor(protected readonly service: ProductCategoryTranslationService) {
    super(service);
  }
}
