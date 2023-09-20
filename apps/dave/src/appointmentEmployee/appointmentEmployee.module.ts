import { Module } from "@nestjs/common";
import { AppointmentEmployeeModuleBase } from "./base/appointmentEmployee.module.base";
import { AppointmentEmployeeService } from "./appointmentEmployee.service";
import { AppointmentEmployeeController } from "./appointmentEmployee.controller";
import { AppointmentEmployeeResolver } from "./appointmentEmployee.resolver";

@Module({
  imports: [AppointmentEmployeeModuleBase],
  controllers: [AppointmentEmployeeController],
  providers: [AppointmentEmployeeService, AppointmentEmployeeResolver],
  exports: [AppointmentEmployeeService],
})
export class AppointmentEmployeeModule {}
