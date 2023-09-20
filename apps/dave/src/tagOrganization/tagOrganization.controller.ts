import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationService } from "./tagOrganization.service";
import { TagOrganizationControllerBase } from "./base/tagOrganization.controller.base";

@swagger.ApiTags("tagOrganizations")
@common.Controller("tagOrganizations")
export class TagOrganizationController extends TagOrganizationControllerBase {
  constructor(protected readonly service: TagOrganizationService) {
    super(service);
  }
}
