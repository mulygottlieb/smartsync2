import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationEmploymentTypeEmployeeService } from "./organizationEmploymentTypeEmployee.service";
import { OrganizationEmploymentTypeEmployeeControllerBase } from "./base/organizationEmploymentTypeEmployee.controller.base";

@swagger.ApiTags("organizationEmploymentTypeEmployees")
@common.Controller("organizationEmploymentTypeEmployees")
export class OrganizationEmploymentTypeEmployeeController extends OrganizationEmploymentTypeEmployeeControllerBase {
  constructor(
    protected readonly service: OrganizationEmploymentTypeEmployeeService
  ) {
    super(service);
  }
}
