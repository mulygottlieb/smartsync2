import { Module } from "@nestjs/common";
import { IntegrationTypeModuleBase } from "./base/integrationType.module.base";
import { IntegrationTypeService } from "./integrationType.service";
import { IntegrationTypeController } from "./integrationType.controller";
import { IntegrationTypeResolver } from "./integrationType.resolver";

@Module({
  imports: [IntegrationTypeModuleBase],
  controllers: [IntegrationTypeController],
  providers: [IntegrationTypeService, IntegrationTypeResolver],
  exports: [IntegrationTypeService],
})
export class IntegrationTypeModule {}
