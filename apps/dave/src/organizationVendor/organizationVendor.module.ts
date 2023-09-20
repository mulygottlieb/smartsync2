import { Module } from "@nestjs/common";
import { OrganizationVendorModuleBase } from "./base/organizationVendor.module.base";
import { OrganizationVendorService } from "./organizationVendor.service";
import { OrganizationVendorController } from "./organizationVendor.controller";
import { OrganizationVendorResolver } from "./organizationVendor.resolver";

@Module({
  imports: [OrganizationVendorModuleBase],
  controllers: [OrganizationVendorController],
  providers: [OrganizationVendorService, OrganizationVendorResolver],
  exports: [OrganizationVendorService],
})
export class OrganizationVendorModule {}
