import * as graphql from "@nestjs/graphql";
import { SkillEmployeeResolverBase } from "./base/skillEmployee.resolver.base";
import { SkillEmployee } from "./base/SkillEmployee";
import { SkillEmployeeService } from "./skillEmployee.service";

@graphql.Resolver(() => SkillEmployee)
export class SkillEmployeeResolver extends SkillEmployeeResolverBase {
  constructor(protected readonly service: SkillEmployeeService) {
    super(service);
  }
}
