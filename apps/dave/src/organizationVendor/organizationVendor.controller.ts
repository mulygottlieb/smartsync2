import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrganizationVendorService } from "./organizationVendor.service";
import { OrganizationVendorControllerBase } from "./base/organizationVendor.controller.base";

@swagger.ApiTags("organizationVendors")
@common.Controller("organizationVendors")
export class OrganizationVendorController extends OrganizationVendorControllerBase {
  constructor(protected readonly service: OrganizationVendorService) {
    super(service);
  }
}
