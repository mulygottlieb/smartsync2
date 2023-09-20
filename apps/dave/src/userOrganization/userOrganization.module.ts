import { Module } from "@nestjs/common";
import { UserOrganizationModuleBase } from "./base/userOrganization.module.base";
import { UserOrganizationService } from "./userOrganization.service";
import { UserOrganizationController } from "./userOrganization.controller";
import { UserOrganizationResolver } from "./userOrganization.resolver";

@Module({
  imports: [UserOrganizationModuleBase],
  controllers: [UserOrganizationController],
  providers: [UserOrganizationService, UserOrganizationResolver],
  exports: [UserOrganizationService],
})
export class UserOrganizationModule {}
