import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KeyResultUpdateService } from "./keyResultUpdate.service";
import { KeyResultUpdateControllerBase } from "./base/keyResultUpdate.controller.base";

@swagger.ApiTags("keyResultUpdates")
@common.Controller("keyResultUpdates")
export class KeyResultUpdateController extends KeyResultUpdateControllerBase {
  constructor(protected readonly service: KeyResultUpdateService) {
    super(service);
  }
}
