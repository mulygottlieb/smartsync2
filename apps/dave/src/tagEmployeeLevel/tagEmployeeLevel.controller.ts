import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagEmployeeLevelService } from "./tagEmployeeLevel.service";
import { TagEmployeeLevelControllerBase } from "./base/tagEmployeeLevel.controller.base";

@swagger.ApiTags("tagEmployeeLevels")
@common.Controller("tagEmployeeLevels")
export class TagEmployeeLevelController extends TagEmployeeLevelControllerBase {
  constructor(protected readonly service: TagEmployeeLevelService) {
    super(service);
  }
}
