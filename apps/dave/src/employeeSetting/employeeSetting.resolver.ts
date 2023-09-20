import * as graphql from "@nestjs/graphql";
import { EmployeeSettingResolverBase } from "./base/employeeSetting.resolver.base";
import { EmployeeSetting } from "./base/EmployeeSetting";
import { EmployeeSettingService } from "./employeeSetting.service";

@graphql.Resolver(() => EmployeeSetting)
export class EmployeeSettingResolver extends EmployeeSettingResolverBase {
  constructor(protected readonly service: EmployeeSettingService) {
    super(service);
  }
}
