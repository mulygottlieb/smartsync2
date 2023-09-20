import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationEmploymentTypeService } from "./tagOrganizationEmploymentType.service";
import { TagOrganizationEmploymentTypeControllerBase } from "./base/tagOrganizationEmploymentType.controller.base";

@swagger.ApiTags("tagOrganizationEmploymentTypes")
@common.Controller("tagOrganizationEmploymentTypes")
export class TagOrganizationEmploymentTypeController extends TagOrganizationEmploymentTypeControllerBase {
  constructor(
    protected readonly service: TagOrganizationEmploymentTypeService
  ) {
    super(service);
  }
}
