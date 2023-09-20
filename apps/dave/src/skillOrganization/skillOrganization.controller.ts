import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SkillOrganizationService } from "./skillOrganization.service";
import { SkillOrganizationControllerBase } from "./base/skillOrganization.controller.base";

@swagger.ApiTags("skillOrganizations")
@common.Controller("skillOrganizations")
export class SkillOrganizationController extends SkillOrganizationControllerBase {
  constructor(protected readonly service: SkillOrganizationService) {
    super(service);
  }
}
