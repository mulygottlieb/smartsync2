import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationTeamEmployeeService } from "./organizationTeamEmployee.service";
import { OrganizationTeamEmployeeControllerBase } from "./base/organizationTeamEmployee.controller.base";

@swagger.ApiTags("organizationTeamEmployees")
@common.Controller("organizationTeamEmployees")
export class OrganizationTeamEmployeeController extends OrganizationTeamEmployeeControllerBase {
  constructor(protected readonly service: OrganizationTeamEmployeeService) {
    super(service);
  }
}
