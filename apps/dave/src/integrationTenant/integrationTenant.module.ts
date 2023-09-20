import { Module } from "@nestjs/common";
import { IntegrationTenantModuleBase } from "./base/integrationTenant.module.base";
import { IntegrationTenantService } from "./integrationTenant.service";
import { IntegrationTenantController } from "./integrationTenant.controller";
import { IntegrationTenantResolver } from "./integrationTenant.resolver";

@Module({
  imports: [IntegrationTenantModuleBase],
  controllers: [IntegrationTenantController],
  providers: [IntegrationTenantService, IntegrationTenantResolver],
  exports: [IntegrationTenantService],
})
export class IntegrationTenantModule {}
