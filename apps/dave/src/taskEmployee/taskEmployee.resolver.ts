import * as graphql from "@nestjs/graphql";
import { TaskEmployeeResolverBase } from "./base/taskEmployee.resolver.base";
import { TaskEmployee } from "./base/TaskEmployee";
import { TaskEmployeeService } from "./taskEmployee.service";

@graphql.Resolver(() => TaskEmployee)
export class TaskEmployeeResolver extends TaskEmployeeResolverBase {
  constructor(protected readonly service: TaskEmployeeService) {
    super(service);
  }
}
