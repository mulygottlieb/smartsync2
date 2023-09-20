import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WarehouseMerchantService } from "./warehouseMerchant.service";
import { WarehouseMerchantControllerBase } from "./base/warehouseMerchant.controller.base";

@swagger.ApiTags("warehouseMerchants")
@common.Controller("warehouseMerchants")
export class WarehouseMerchantController extends WarehouseMerchantControllerBase {
  constructor(protected readonly service: WarehouseMerchantService) {
    super(service);
  }
}
