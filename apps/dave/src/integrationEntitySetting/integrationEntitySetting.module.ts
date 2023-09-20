import { Module } from "@nestjs/common";
import { IntegrationEntitySettingModuleBase } from "./base/integrationEntitySetting.module.base";
import { IntegrationEntitySettingService } from "./integrationEntitySetting.service";
import { IntegrationEntitySettingController } from "./integrationEntitySetting.controller";
import { IntegrationEntitySettingResolver } from "./integrationEntitySetting.resolver";

@Module({
  imports: [IntegrationEntitySettingModuleBase],
  controllers: [IntegrationEntitySettingController],
  providers: [
    IntegrationEntitySettingService,
    IntegrationEntitySettingResolver,
  ],
  exports: [IntegrationEntitySettingService],
})
export class IntegrationEntitySettingModule {}
