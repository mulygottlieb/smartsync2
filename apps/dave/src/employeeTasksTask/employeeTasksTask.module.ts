import { Module } from "@nestjs/common";
import { EmployeeTasksTaskModuleBase } from "./base/employeeTasksTask.module.base";
import { EmployeeTasksTaskService } from "./employeeTasksTask.service";
import { EmployeeTasksTaskController } from "./employeeTasksTask.controller";
import { EmployeeTasksTaskResolver } from "./employeeTasksTask.resolver";

@Module({
  imports: [EmployeeTasksTaskModuleBase],
  controllers: [EmployeeTasksTaskController],
  providers: [EmployeeTasksTaskService, EmployeeTasksTaskResolver],
  exports: [EmployeeTasksTaskService],
})
export class EmployeeTasksTaskModule {}
