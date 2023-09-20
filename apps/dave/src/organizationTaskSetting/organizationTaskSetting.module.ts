import { Module } from "@nestjs/common";
import { OrganizationTaskSettingModuleBase } from "./base/organizationTaskSetting.module.base";
import { OrganizationTaskSettingService } from "./organizationTaskSetting.service";
import { OrganizationTaskSettingController } from "./organizationTaskSetting.controller";
import { OrganizationTaskSettingResolver } from "./organizationTaskSetting.resolver";

@Module({
  imports: [OrganizationTaskSettingModuleBase],
  controllers: [OrganizationTaskSettingController],
  providers: [OrganizationTaskSettingService, OrganizationTaskSettingResolver],
  exports: [OrganizationTaskSettingService],
})
export class OrganizationTaskSettingModule {}
