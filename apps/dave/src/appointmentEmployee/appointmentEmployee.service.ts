import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppointmentEmployeeServiceBase } from "./base/appointmentEmployee.service.base";

@Injectable()
export class AppointmentEmployeeService extends AppointmentEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
