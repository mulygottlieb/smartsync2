import { Module } from "@nestjs/common";
import { ImportHistoryModuleBase } from "./base/importHistory.module.base";
import { ImportHistoryService } from "./importHistory.service";
import { ImportHistoryController } from "./importHistory.controller";
import { ImportHistoryResolver } from "./importHistory.resolver";

@Module({
  imports: [ImportHistoryModuleBase],
  controllers: [ImportHistoryController],
  providers: [ImportHistoryService, ImportHistoryResolver],
  exports: [ImportHistoryService],
})
export class ImportHistoryModule {}
