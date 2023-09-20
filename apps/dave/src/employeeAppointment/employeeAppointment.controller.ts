import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeAppointmentService } from "./employeeAppointment.service";
import { EmployeeAppointmentControllerBase } from "./base/employeeAppointment.controller.base";

@swagger.ApiTags("employeeAppointments")
@common.Controller("employeeAppointments")
export class EmployeeAppointmentController extends EmployeeAppointmentControllerBase {
  constructor(protected readonly service: EmployeeAppointmentService) {
    super(service);
  }
}
