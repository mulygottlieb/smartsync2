import { Module } from "@nestjs/common";
import { TagOrganizationVendorModuleBase } from "./base/tagOrganizationVendor.module.base";
import { TagOrganizationVendorService } from "./tagOrganizationVendor.service";
import { TagOrganizationVendorController } from "./tagOrganizationVendor.controller";
import { TagOrganizationVendorResolver } from "./tagOrganizationVendor.resolver";

@Module({
  imports: [TagOrganizationVendorModuleBase],
  controllers: [TagOrganizationVendorController],
  providers: [TagOrganizationVendorService, TagOrganizationVendorResolver],
  exports: [TagOrganizationVendorService],
})
export class TagOrganizationVendorModule {}
