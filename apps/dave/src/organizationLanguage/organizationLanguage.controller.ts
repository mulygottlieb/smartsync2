import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationLanguageService } from "./organizationLanguage.service";
import { OrganizationLanguageControllerBase } from "./base/organizationLanguage.controller.base";

@swagger.ApiTags("organizationLanguages")
@common.Controller("organizationLanguages")
export class OrganizationLanguageController extends OrganizationLanguageControllerBase {
  constructor(protected readonly service: OrganizationLanguageService) {
    super(service);
  }
}
