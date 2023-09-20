import { Module } from "@nestjs/common";
import { TaskVersionModuleBase } from "./base/taskVersion.module.base";
import { TaskVersionService } from "./taskVersion.service";
import { TaskVersionController } from "./taskVersion.controller";
import { TaskVersionResolver } from "./taskVersion.resolver";

@Module({
  imports: [TaskVersionModuleBase],
  controllers: [TaskVersionController],
  providers: [TaskVersionService, TaskVersionResolver],
  exports: [TaskVersionService],
})
export class TaskVersionModule {}
