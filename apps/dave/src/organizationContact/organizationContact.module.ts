import { Module } from "@nestjs/common";
import { OrganizationContactModuleBase } from "./base/organizationContact.module.base";
import { OrganizationContactService } from "./organizationContact.service";
import { OrganizationContactController } from "./organizationContact.controller";
import { OrganizationContactResolver } from "./organizationContact.resolver";

@Module({
  imports: [OrganizationContactModuleBase],
  controllers: [OrganizationContactController],
  providers: [OrganizationContactService, OrganizationContactResolver],
  exports: [OrganizationContactService],
})
export class OrganizationContactModule {}
