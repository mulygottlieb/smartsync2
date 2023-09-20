import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagProductService } from "./tagProduct.service";
import { TagProductControllerBase } from "./base/tagProduct.controller.base";

@swagger.ApiTags("tagProducts")
@common.Controller("tagProducts")
export class TagProductController extends TagProductControllerBase {
  constructor(protected readonly service: TagProductService) {
    super(service);
  }
}
