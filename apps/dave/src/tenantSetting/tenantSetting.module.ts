import { Module } from "@nestjs/common";
import { TenantSettingModuleBase } from "./base/tenantSetting.module.base";
import { TenantSettingService } from "./tenantSetting.service";
import { TenantSettingController } from "./tenantSetting.controller";
import { TenantSettingResolver } from "./tenantSetting.resolver";

@Module({
  imports: [TenantSettingModuleBase],
  controllers: [TenantSettingController],
  providers: [TenantSettingService, TenantSettingResolver],
  exports: [TenantSettingService],
})
export class TenantSettingModule {}
