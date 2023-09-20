import { Module } from "@nestjs/common";
import { OrganizationAwardModuleBase } from "./base/organizationAward.module.base";
import { OrganizationAwardService } from "./organizationAward.service";
import { OrganizationAwardController } from "./organizationAward.controller";
import { OrganizationAwardResolver } from "./organizationAward.resolver";

@Module({
  imports: [OrganizationAwardModuleBase],
  controllers: [OrganizationAwardController],
  providers: [OrganizationAwardService, OrganizationAwardResolver],
  exports: [OrganizationAwardService],
})
export class OrganizationAwardModule {}
