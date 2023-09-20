import { Module } from "@nestjs/common";
import { TaskSizeModuleBase } from "./base/taskSize.module.base";
import { TaskSizeService } from "./taskSize.service";
import { TaskSizeController } from "./taskSize.controller";
import { TaskSizeResolver } from "./taskSize.resolver";

@Module({
  imports: [TaskSizeModuleBase],
  controllers: [TaskSizeController],
  providers: [TaskSizeService, TaskSizeResolver],
  exports: [TaskSizeService],
})
export class TaskSizeModule {}
