import { Module } from "@nestjs/common";
import { OrganizationLanguageModuleBase } from "./base/organizationLanguage.module.base";
import { OrganizationLanguageService } from "./organizationLanguage.service";
import { OrganizationLanguageController } from "./organizationLanguage.controller";
import { OrganizationLanguageResolver } from "./organizationLanguage.resolver";

@Module({
  imports: [OrganizationLanguageModuleBase],
  controllers: [OrganizationLanguageController],
  providers: [OrganizationLanguageService, OrganizationLanguageResolver],
  exports: [OrganizationLanguageService],
})
export class OrganizationLanguageModule {}
