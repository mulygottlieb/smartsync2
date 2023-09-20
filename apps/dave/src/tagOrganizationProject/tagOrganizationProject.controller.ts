import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationProjectService } from "./tagOrganizationProject.service";
import { TagOrganizationProjectControllerBase } from "./base/tagOrganizationProject.controller.base";

@swagger.ApiTags("tagOrganizationProjects")
@common.Controller("tagOrganizationProjects")
export class TagOrganizationProjectController extends TagOrganizationProjectControllerBase {
  constructor(protected readonly service: TagOrganizationProjectService) {
    super(service);
  }
}
