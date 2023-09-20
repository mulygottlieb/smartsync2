import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KeyResultTemplateService } from "./keyResultTemplate.service";
import { KeyResultTemplateControllerBase } from "./base/keyResultTemplate.controller.base";

@swagger.ApiTags("keyResultTemplates")
@common.Controller("keyResultTemplates")
export class KeyResultTemplateController extends KeyResultTemplateControllerBase {
  constructor(protected readonly service: KeyResultTemplateService) {
    super(service);
  }
}
