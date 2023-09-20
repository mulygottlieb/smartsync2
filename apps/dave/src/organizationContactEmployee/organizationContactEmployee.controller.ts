import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationContactEmployeeService } from "./organizationContactEmployee.service";
import { OrganizationContactEmployeeControllerBase } from "./base/organizationContactEmployee.controller.base";

@swagger.ApiTags("organizationContactEmployees")
@common.Controller("organizationContactEmployees")
export class OrganizationContactEmployeeController extends OrganizationContactEmployeeControllerBase {
  constructor(protected readonly service: OrganizationContactEmployeeService) {
    super(service);
  }
}
