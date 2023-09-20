import { Module } from "@nestjs/common";
import { TagEmployeeModuleBase } from "./base/tagEmployee.module.base";
import { TagEmployeeService } from "./tagEmployee.service";
import { TagEmployeeController } from "./tagEmployee.controller";
import { TagEmployeeResolver } from "./tagEmployee.resolver";

@Module({
  imports: [TagEmployeeModuleBase],
  controllers: [TagEmployeeController],
  providers: [TagEmployeeService, TagEmployeeResolver],
  exports: [TagEmployeeService],
})
export class TagEmployeeModule {}
