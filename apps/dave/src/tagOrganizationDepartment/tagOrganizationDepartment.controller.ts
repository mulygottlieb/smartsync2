import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationDepartmentService } from "./tagOrganizationDepartment.service";
import { TagOrganizationDepartmentControllerBase } from "./base/tagOrganizationDepartment.controller.base";

@swagger.ApiTags("tagOrganizationDepartments")
@common.Controller("tagOrganizationDepartments")
export class TagOrganizationDepartmentController extends TagOrganizationDepartmentControllerBase {
  constructor(protected readonly service: TagOrganizationDepartmentService) {
    super(service);
  }
}
