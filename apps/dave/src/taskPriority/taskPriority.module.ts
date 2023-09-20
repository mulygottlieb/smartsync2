import { Module } from "@nestjs/common";
import { TaskPriorityModuleBase } from "./base/taskPriority.module.base";
import { TaskPriorityService } from "./taskPriority.service";
import { TaskPriorityController } from "./taskPriority.controller";
import { TaskPriorityResolver } from "./taskPriority.resolver";

@Module({
  imports: [TaskPriorityModuleBase],
  controllers: [TaskPriorityController],
  providers: [TaskPriorityService, TaskPriorityResolver],
  exports: [TaskPriorityService],
})
export class TaskPriorityModule {}
