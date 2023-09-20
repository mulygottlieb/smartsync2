import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagEventTypeService } from "./tagEventType.service";
import { TagEventTypeControllerBase } from "./base/tagEventType.controller.base";

@swagger.ApiTags("tagEventTypes")
@common.Controller("tagEventTypes")
export class TagEventTypeController extends TagEventTypeControllerBase {
  constructor(protected readonly service: TagEventTypeService) {
    super(service);
  }
}
