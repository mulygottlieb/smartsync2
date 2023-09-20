import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeAwardServiceBase } from "./base/employeeAward.service.base";

@Injectable()
export class EmployeeAwardService extends EmployeeAwardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
