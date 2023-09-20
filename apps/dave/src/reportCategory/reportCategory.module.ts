import { Module } from "@nestjs/common";
import { ReportCategoryModuleBase } from "./base/reportCategory.module.base";
import { ReportCategoryService } from "./reportCategory.service";
import { ReportCategoryController } from "./reportCategory.controller";
import { ReportCategoryResolver } from "./reportCategory.resolver";

@Module({
  imports: [ReportCategoryModuleBase],
  controllers: [ReportCategoryController],
  providers: [ReportCategoryService, ReportCategoryResolver],
  exports: [ReportCategoryService],
})
export class ReportCategoryModule {}
