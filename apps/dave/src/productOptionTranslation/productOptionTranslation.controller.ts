import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductOptionTranslationService } from "./productOptionTranslation.service";
import { ProductOptionTranslationControllerBase } from "./base/productOptionTranslation.controller.base";

@swagger.ApiTags("productOptionTranslations")
@common.Controller("productOptionTranslations")
export class ProductOptionTranslationController extends ProductOptionTranslationControllerBase {
  constructor(protected readonly service: ProductOptionTranslationService) {
    super(service);
  }
}
