import { Module } from "@nestjs/common";
import { SkillOrganizationModuleBase } from "./base/skillOrganization.module.base";
import { SkillOrganizationService } from "./skillOrganization.service";
import { SkillOrganizationController } from "./skillOrganization.controller";
import { SkillOrganizationResolver } from "./skillOrganization.resolver";

@Module({
  imports: [SkillOrganizationModuleBase],
  controllers: [SkillOrganizationController],
  providers: [SkillOrganizationService, SkillOrganizationResolver],
  exports: [SkillOrganizationService],
})
export class SkillOrganizationModule {}
