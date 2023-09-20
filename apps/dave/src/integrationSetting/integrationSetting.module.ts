import { Module } from "@nestjs/common";
import { IntegrationSettingModuleBase } from "./base/integrationSetting.module.base";
import { IntegrationSettingService } from "./integrationSetting.service";
import { IntegrationSettingController } from "./integrationSetting.controller";
import { IntegrationSettingResolver } from "./integrationSetting.resolver";

@Module({
  imports: [IntegrationSettingModuleBase],
  controllers: [IntegrationSettingController],
  providers: [IntegrationSettingService, IntegrationSettingResolver],
  exports: [IntegrationSettingService],
})
export class IntegrationSettingModule {}
