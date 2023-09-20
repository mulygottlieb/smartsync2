import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillEmployeeService } from "./skillEmployee.service";
import { SkillEmployeeControllerBase } from "./base/skillEmployee.controller.base";

@swagger.ApiTags("skillEmployees")
@common.Controller("skillEmployees")
export class SkillEmployeeController extends SkillEmployeeControllerBase {
  constructor(protected readonly service: SkillEmployeeService) {
    super(service);
  }
}
