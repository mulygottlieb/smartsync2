import { Module } from "@nestjs/common";
import { IntegrationMapModuleBase } from "./base/integrationMap.module.base";
import { IntegrationMapService } from "./integrationMap.service";
import { IntegrationMapController } from "./integrationMap.controller";
import { IntegrationMapResolver } from "./integrationMap.resolver";

@Module({
  imports: [IntegrationMapModuleBase],
  controllers: [IntegrationMapController],
  providers: [IntegrationMapService, IntegrationMapResolver],
  exports: [IntegrationMapService],
})
export class IntegrationMapModule {}
