import * as graphql from "@nestjs/graphql";
import { EmployeePhoneResolverBase } from "./base/employeePhone.resolver.base";
import { EmployeePhone } from "./base/EmployeePhone";
import { EmployeePhoneService } from "./employeePhone.service";

@graphql.Resolver(() => EmployeePhone)
export class EmployeePhoneResolver extends EmployeePhoneResolverBase {
  constructor(protected readonly service: EmployeePhoneService) {
    super(service);
  }
}
