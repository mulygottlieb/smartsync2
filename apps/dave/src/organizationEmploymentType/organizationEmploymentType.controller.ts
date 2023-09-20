import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationEmploymentTypeService } from "./organizationEmploymentType.service";
import { OrganizationEmploymentTypeControllerBase } from "./base/organizationEmploymentType.controller.base";

@swagger.ApiTags("organizationEmploymentTypes")
@common.Controller("organizationEmploymentTypes")
export class OrganizationEmploymentTypeController extends OrganizationEmploymentTypeControllerBase {
  constructor(protected readonly service: OrganizationEmploymentTypeService) {
    super(service);
  }
}
