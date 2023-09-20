import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TagOrganizationVendorService } from "./tagOrganizationVendor.service";
import { TagOrganizationVendorControllerBase } from "./base/tagOrganizationVendor.controller.base";

@swagger.ApiTags("tagOrganizationVendors")
@common.Controller("tagOrganizationVendors")
export class TagOrganizationVendorController extends TagOrganizationVendorControllerBase {
  constructor(protected readonly service: TagOrganizationVendorService) {
    super(service);
  }
}
