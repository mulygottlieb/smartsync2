import * as graphql from "@nestjs/graphql";
import { EmployeeTasksTaskResolverBase } from "./base/employeeTasksTask.resolver.base";
import { EmployeeTasksTask } from "./base/EmployeeTasksTask";
import { EmployeeTasksTaskService } from "./employeeTasksTask.service";

@graphql.Resolver(() => EmployeeTasksTask)
export class EmployeeTasksTaskResolver extends EmployeeTasksTaskResolverBase {
  constructor(protected readonly service: EmployeeTasksTaskService) {
    super(service);
  }
}
