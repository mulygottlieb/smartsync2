import { Module } from "@nestjs/common";
import { IntegrationIntegrationTypeModuleBase } from "./base/integrationIntegrationType.module.base";
import { IntegrationIntegrationTypeService } from "./integrationIntegrationType.service";
import { IntegrationIntegrationTypeController } from "./integrationIntegrationType.controller";
import { IntegrationIntegrationTypeResolver } from "./integrationIntegrationType.resolver";

@Module({
  imports: [IntegrationIntegrationTypeModuleBase],
  controllers: [IntegrationIntegrationTypeController],
  providers: [
    IntegrationIntegrationTypeService,
    IntegrationIntegrationTypeResolver,
  ],
  exports: [IntegrationIntegrationTypeService],
})
export class IntegrationIntegrationTypeModule {}
