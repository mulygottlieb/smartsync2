import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeRecurringExpenseServiceBase } from "./base/employeeRecurringExpense.service.base";

@Injectable()
export class EmployeeRecurringExpenseService extends EmployeeRecurringExpenseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
