import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagUserService } from "./tagUser.service";
import { TagUserControllerBase } from "./base/tagUser.controller.base";

@swagger.ApiTags("tagUsers")
@common.Controller("tagUsers")
export class TagUserController extends TagUserControllerBase {
  constructor(protected readonly service: TagUserService) {
    super(service);
  }
}
