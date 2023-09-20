import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagEmployeeService } from "./tagEmployee.service";
import { TagEmployeeControllerBase } from "./base/tagEmployee.controller.base";

@swagger.ApiTags("tagEmployees")
@common.Controller("tagEmployees")
export class TagEmployeeController extends TagEmployeeControllerBase {
  constructor(protected readonly service: TagEmployeeService) {
    super(service);
  }
}
