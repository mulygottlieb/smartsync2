import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagWarehouseService } from "./tagWarehouse.service";
import { TagWarehouseControllerBase } from "./base/tagWarehouse.controller.base";

@swagger.ApiTags("tagWarehouses")
@common.Controller("tagWarehouses")
export class TagWarehouseController extends TagWarehouseControllerBase {
  constructor(protected readonly service: TagWarehouseService) {
    super(service);
  }
}
