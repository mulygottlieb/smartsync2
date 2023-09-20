import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InviteOrganizationDepartmentService } from "./inviteOrganizationDepartment.service";
import { InviteOrganizationDepartmentControllerBase } from "./base/inviteOrganizationDepartment.controller.base";

@swagger.ApiTags("inviteOrganizationDepartments")
@common.Controller("inviteOrganizationDepartments")
export class InviteOrganizationDepartmentController extends InviteOrganizationDepartmentControllerBase {
  constructor(protected readonly service: InviteOrganizationDepartmentService) {
    super(service);
  }
}
