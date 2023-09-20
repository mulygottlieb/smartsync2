import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagMerchantService } from "./tagMerchant.service";
import { TagMerchantControllerBase } from "./base/tagMerchant.controller.base";

@swagger.ApiTags("tagMerchants")
@common.Controller("tagMerchants")
export class TagMerchantController extends TagMerchantControllerBase {
  constructor(protected readonly service: TagMerchantService) {
    super(service);
  }
}
