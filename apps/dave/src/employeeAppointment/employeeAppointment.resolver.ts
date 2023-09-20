import * as graphql from "@nestjs/graphql";
import { EmployeeAppointmentResolverBase } from "./base/employeeAppointment.resolver.base";
import { EmployeeAppointment } from "./base/EmployeeAppointment";
import { EmployeeAppointmentService } from "./employeeAppointment.service";

@graphql.Resolver(() => EmployeeAppointment)
export class EmployeeAppointmentResolver extends EmployeeAppointmentResolverBase {
  constructor(protected readonly service: EmployeeAppointmentService) {
    super(service);
  }
}
