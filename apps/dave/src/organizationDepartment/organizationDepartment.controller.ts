import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationDepartmentService } from "./organizationDepartment.service";
import { OrganizationDepartmentControllerBase } from "./base/organizationDepartment.controller.base";

@swagger.ApiTags("organizationDepartments")
@common.Controller("organizationDepartments")
export class OrganizationDepartmentController extends OrganizationDepartmentControllerBase {
  constructor(protected readonly service: OrganizationDepartmentService) {
    super(service);
  }
}
