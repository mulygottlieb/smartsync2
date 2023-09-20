import * as graphql from "@nestjs/graphql";
import { AppointmentEmployeeResolverBase } from "./base/appointmentEmployee.resolver.base";
import { AppointmentEmployee } from "./base/AppointmentEmployee";
import { AppointmentEmployeeService } from "./appointmentEmployee.service";

@graphql.Resolver(() => AppointmentEmployee)
export class AppointmentEmployeeResolver extends AppointmentEmployeeResolverBase {
  constructor(protected readonly service: AppointmentEmployeeService) {
    super(service);
  }
}
