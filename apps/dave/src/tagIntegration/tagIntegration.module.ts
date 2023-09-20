import { Module } from "@nestjs/common";
import { TagIntegrationModuleBase } from "./base/tagIntegration.module.base";
import { TagIntegrationService } from "./tagIntegration.service";
import { TagIntegrationController } from "./tagIntegration.controller";
import { TagIntegrationResolver } from "./tagIntegration.resolver";

@Module({
  imports: [TagIntegrationModuleBase],
  controllers: [TagIntegrationController],
  providers: [TagIntegrationService, TagIntegrationResolver],
  exports: [TagIntegrationService],
})
export class TagIntegrationModule {}
