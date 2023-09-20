import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductVariantSettingService } from "./productVariantSetting.service";
import { ProductVariantSettingControllerBase } from "./base/productVariantSetting.controller.base";

@swagger.ApiTags("productVariantSettings")
@common.Controller("productVariantSettings")
export class ProductVariantSettingController extends ProductVariantSettingControllerBase {
  constructor(protected readonly service: ProductVariantSettingService) {
    super(service);
  }
}
