import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeLevelServiceBase } from "./base/employeeLevel.service.base";

@Injectable()
export class EmployeeLevelService extends EmployeeLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
