import { Module } from "@nestjs/common";
import { FeatureOrganizationModuleBase } from "./base/featureOrganization.module.base";
import { FeatureOrganizationService } from "./featureOrganization.service";
import { FeatureOrganizationController } from "./featureOrganization.controller";
import { FeatureOrganizationResolver } from "./featureOrganization.resolver";

@Module({
  imports: [FeatureOrganizationModuleBase],
  controllers: [FeatureOrganizationController],
  providers: [FeatureOrganizationService, FeatureOrganizationResolver],
  exports: [FeatureOrganizationService],
})
export class FeatureOrganizationModule {}
