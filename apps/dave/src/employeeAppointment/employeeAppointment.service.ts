import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeAppointmentServiceBase } from "./base/employeeAppointment.service.base";

@Injectable()
export class EmployeeAppointmentService extends EmployeeAppointmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
