import * as graphql from "@nestjs/graphql";
import { TagEmployeeResolverBase } from "./base/tagEmployee.resolver.base";
import { TagEmployee } from "./base/TagEmployee";
import { TagEmployeeService } from "./tagEmployee.service";

@graphql.Resolver(() => TagEmployee)
export class TagEmployeeResolver extends TagEmployeeResolverBase {
  constructor(protected readonly service: TagEmployeeService) {
    super(service);
  }
}
