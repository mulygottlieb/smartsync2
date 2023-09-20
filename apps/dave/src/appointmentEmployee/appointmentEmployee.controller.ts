import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppointmentEmployeeService } from "./appointmentEmployee.service";
import { AppointmentEmployeeControllerBase } from "./base/appointmentEmployee.controller.base";

@swagger.ApiTags("appointmentEmployees")
@common.Controller("appointmentEmployees")
export class AppointmentEmployeeController extends AppointmentEmployeeControllerBase {
  constructor(protected readonly service: AppointmentEmployeeService) {
    super(service);
  }
}
