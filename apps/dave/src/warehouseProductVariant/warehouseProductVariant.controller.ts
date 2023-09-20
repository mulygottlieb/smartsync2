import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WarehouseProductVariantService } from "./warehouseProductVariant.service";
import { WarehouseProductVariantControllerBase } from "./base/warehouseProductVariant.controller.base";

@swagger.ApiTags("warehouseProductVariants")
@common.Controller("warehouseProductVariants")
export class WarehouseProductVariantController extends WarehouseProductVariantControllerBase {
  constructor(protected readonly service: WarehouseProductVariantService) {
    super(service);
  }
}
