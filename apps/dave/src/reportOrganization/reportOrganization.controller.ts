import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReportOrganizationService } from "./reportOrganization.service";
import { ReportOrganizationControllerBase } from "./base/reportOrganization.controller.base";

@swagger.ApiTags("reportOrganizations")
@common.Controller("reportOrganizations")
export class ReportOrganizationController extends ReportOrganizationControllerBase {
  constructor(protected readonly service: ReportOrganizationService) {
    super(service);
  }
}
