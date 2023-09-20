import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationDepartmentEmployeeService } from "./organizationDepartmentEmployee.service";
import { OrganizationDepartmentEmployeeControllerBase } from "./base/organizationDepartmentEmployee.controller.base";

@swagger.ApiTags("organizationDepartmentEmployees")
@common.Controller("organizationDepartmentEmployees")
export class OrganizationDepartmentEmployeeController extends OrganizationDepartmentEmployeeControllerBase {
  constructor(
    protected readonly service: OrganizationDepartmentEmployeeService
  ) {
    super(service);
  }
}
