import { Module } from "@nestjs/common";
import { TagEmployeeLevelModuleBase } from "./base/tagEmployeeLevel.module.base";
import { TagEmployeeLevelService } from "./tagEmployeeLevel.service";
import { TagEmployeeLevelController } from "./tagEmployeeLevel.controller";
import { TagEmployeeLevelResolver } from "./tagEmployeeLevel.resolver";

@Module({
  imports: [TagEmployeeLevelModuleBase],
  controllers: [TagEmployeeLevelController],
  providers: [TagEmployeeLevelService, TagEmployeeLevelResolver],
  exports: [TagEmployeeLevelService],
})
export class TagEmployeeLevelModule {}
