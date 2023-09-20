import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeePhoneServiceBase } from "./base/employeePhone.service.base";

@Injectable()
export class EmployeePhoneService extends EmployeePhoneServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
