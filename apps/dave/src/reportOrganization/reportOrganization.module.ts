import { Module } from "@nestjs/common";
import { ReportOrganizationModuleBase } from "./base/reportOrganization.module.base";
import { ReportOrganizationService } from "./reportOrganization.service";
import { ReportOrganizationController } from "./reportOrganization.controller";
import { ReportOrganizationResolver } from "./reportOrganization.resolver";

@Module({
  imports: [ReportOrganizationModuleBase],
  controllers: [ReportOrganizationController],
  providers: [ReportOrganizationService, ReportOrganizationResolver],
  exports: [ReportOrganizationService],
})
export class ReportOrganizationModule {}
