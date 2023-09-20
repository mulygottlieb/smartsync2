import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationPositionService } from "./tagOrganizationPosition.service";
import { TagOrganizationPositionControllerBase } from "./base/tagOrganizationPosition.controller.base";

@swagger.ApiTags("tagOrganizationPositions")
@common.Controller("tagOrganizationPositions")
export class TagOrganizationPositionController extends TagOrganizationPositionControllerBase {
  constructor(protected readonly service: TagOrganizationPositionService) {
    super(service);
  }
}
