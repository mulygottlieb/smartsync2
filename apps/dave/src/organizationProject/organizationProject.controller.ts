import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationProjectService } from "./organizationProject.service";
import { OrganizationProjectControllerBase } from "./base/organizationProject.controller.base";

@swagger.ApiTags("organizationProjects")
@common.Controller("organizationProjects")
export class OrganizationProjectController extends OrganizationProjectControllerBase {
  constructor(protected readonly service: OrganizationProjectService) {
    super(service);
  }
}
