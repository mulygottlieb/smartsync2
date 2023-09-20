import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeatureOrganizationService } from "./featureOrganization.service";
import { FeatureOrganizationControllerBase } from "./base/featureOrganization.controller.base";

@swagger.ApiTags("featureOrganizations")
@common.Controller("featureOrganizations")
export class FeatureOrganizationController extends FeatureOrganizationControllerBase {
  constructor(protected readonly service: FeatureOrganizationService) {
    super(service);
  }
}
