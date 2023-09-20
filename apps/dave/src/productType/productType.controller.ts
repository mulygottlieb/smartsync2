import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductTypeService } from "./productType.service";
import { ProductTypeControllerBase } from "./base/productType.controller.base";

@swagger.ApiTags("productTypes")
@common.Controller("productTypes")
export class ProductTypeController extends ProductTypeControllerBase {
  constructor(protected readonly service: ProductTypeService) {
    super(service);
  }
}
