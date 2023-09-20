import { Module } from "@nestjs/common";
import { TagOrganizationContactModuleBase } from "./base/tagOrganizationContact.module.base";
import { TagOrganizationContactService } from "./tagOrganizationContact.service";
import { TagOrganizationContactController } from "./tagOrganizationContact.controller";
import { TagOrganizationContactResolver } from "./tagOrganizationContact.resolver";

@Module({
  imports: [TagOrganizationContactModuleBase],
  controllers: [TagOrganizationContactController],
  providers: [TagOrganizationContactService, TagOrganizationContactResolver],
  exports: [TagOrganizationContactService],
})
export class TagOrganizationContactModule {}
