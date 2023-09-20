import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductOptionGroupTranslationService } from "./productOptionGroupTranslation.service";
import { ProductOptionGroupTranslationControllerBase } from "./base/productOptionGroupTranslation.controller.base";

@swagger.ApiTags("productOptionGroupTranslations")
@common.Controller("productOptionGroupTranslations")
export class ProductOptionGroupTranslationController extends ProductOptionGroupTranslationControllerBase {
  constructor(
    protected readonly service: ProductOptionGroupTranslationService
  ) {
    super(service);
  }
}
