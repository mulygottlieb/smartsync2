import { Module } from "@nestjs/common";
import { InviteOrganizationContactModuleBase } from "./base/inviteOrganizationContact.module.base";
import { InviteOrganizationContactService } from "./inviteOrganizationContact.service";
import { InviteOrganizationContactController } from "./inviteOrganizationContact.controller";
import { InviteOrganizationContactResolver } from "./inviteOrganizationContact.resolver";

@Module({
  imports: [InviteOrganizationContactModuleBase],
  controllers: [InviteOrganizationContactController],
  providers: [
    InviteOrganizationContactService,
    InviteOrganizationContactResolver,
  ],
  exports: [InviteOrganizationContactService],
})
export class InviteOrganizationContactModule {}
