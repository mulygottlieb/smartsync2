import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductTranslationService } from "./productTranslation.service";
import { ProductTranslationControllerBase } from "./base/productTranslation.controller.base";

@swagger.ApiTags("productTranslations")
@common.Controller("productTranslations")
export class ProductTranslationController extends ProductTranslationControllerBase {
  constructor(protected readonly service: ProductTranslationService) {
    super(service);
  }
}
