import { Module } from "@nestjs/common";
import { IntegrationEntitySettingTiedModuleBase } from "./base/integrationEntitySettingTied.module.base";
import { IntegrationEntitySettingTiedService } from "./integrationEntitySettingTied.service";
import { IntegrationEntitySettingTiedController } from "./integrationEntitySettingTied.controller";
import { IntegrationEntitySettingTiedResolver } from "./integrationEntitySettingTied.resolver";

@Module({
  imports: [IntegrationEntitySettingTiedModuleBase],
  controllers: [IntegrationEntitySettingTiedController],
  providers: [
    IntegrationEntitySettingTiedService,
    IntegrationEntitySettingTiedResolver,
  ],
  exports: [IntegrationEntitySettingTiedService],
})
export class IntegrationEntitySettingTiedModule {}
