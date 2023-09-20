import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WarehouseProductService } from "./warehouseProduct.service";
import { WarehouseProductControllerBase } from "./base/warehouseProduct.controller.base";

@swagger.ApiTags("warehouseProducts")
@common.Controller("warehouseProducts")
export class WarehouseProductController extends WarehouseProductControllerBase {
  constructor(protected readonly service: WarehouseProductService) {
    super(service);
  }
}
