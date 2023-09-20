import { Module } from "@nestjs/common";
import { EmployeeAppointmentModuleBase } from "./base/employeeAppointment.module.base";
import { EmployeeAppointmentService } from "./employeeAppointment.service";
import { EmployeeAppointmentController } from "./employeeAppointment.controller";
import { EmployeeAppointmentResolver } from "./employeeAppointment.resolver";

@Module({
  imports: [EmployeeAppointmentModuleBase],
  controllers: [EmployeeAppointmentController],
  providers: [EmployeeAppointmentService, EmployeeAppointmentResolver],
  exports: [EmployeeAppointmentService],
})
export class EmployeeAppointmentModule {}
