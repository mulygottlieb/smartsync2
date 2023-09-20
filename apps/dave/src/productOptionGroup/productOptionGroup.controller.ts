import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductOptionGroupService } from "./productOptionGroup.service";
import { ProductOptionGroupControllerBase } from "./base/productOptionGroup.controller.base";

@swagger.ApiTags("productOptionGroups")
@common.Controller("productOptionGroups")
export class ProductOptionGroupController extends ProductOptionGroupControllerBase {
  constructor(protected readonly service: ProductOptionGroupService) {
    super(service);
  }
}
