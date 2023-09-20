import { Module } from "@nestjs/common";
import { TagTaskModuleBase } from "./base/tagTask.module.base";
import { TagTaskService } from "./tagTask.service";
import { TagTaskController } from "./tagTask.controller";
import { TagTaskResolver } from "./tagTask.resolver";

@Module({
  imports: [TagTaskModuleBase],
  controllers: [TagTaskController],
  providers: [TagTaskService, TagTaskResolver],
  exports: [TagTaskService],
})
export class TagTaskModule {}
