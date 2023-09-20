import { Module } from "@nestjs/common";
import { TaskEmployeeModuleBase } from "./base/taskEmployee.module.base";
import { TaskEmployeeService } from "./taskEmployee.service";
import { TaskEmployeeController } from "./taskEmployee.controller";
import { TaskEmployeeResolver } from "./taskEmployee.resolver";

@Module({
  imports: [TaskEmployeeModuleBase],
  controllers: [TaskEmployeeController],
  providers: [TaskEmployeeService, TaskEmployeeResolver],
  exports: [TaskEmployeeService],
})
export class TaskEmployeeModule {}
