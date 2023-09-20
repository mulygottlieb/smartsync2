import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationProjectEmployeeService } from "./organizationProjectEmployee.service";
import { OrganizationProjectEmployeeControllerBase } from "./base/organizationProjectEmployee.controller.base";

@swagger.ApiTags("organizationProjectEmployees")
@common.Controller("organizationProjectEmployees")
export class OrganizationProjectEmployeeController extends OrganizationProjectEmployeeControllerBase {
  constructor(protected readonly service: OrganizationProjectEmployeeService) {
    super(service);
  }
}
