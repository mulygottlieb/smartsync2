import { Module } from "@nestjs/common";
import { ImportRecordModuleBase } from "./base/importRecord.module.base";
import { ImportRecordService } from "./importRecord.service";
import { ImportRecordController } from "./importRecord.controller";
import { ImportRecordResolver } from "./importRecord.resolver";

@Module({
  imports: [ImportRecordModuleBase],
  controllers: [ImportRecordController],
  providers: [ImportRecordService, ImportRecordResolver],
  exports: [ImportRecordService],
})
export class ImportRecordModule {}
