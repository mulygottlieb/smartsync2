import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationRecurringExpenseServiceBase } from "./base/organizationRecurringExpense.service.base";

@Injectable()
export class OrganizationRecurringExpenseService extends OrganizationRecurringExpenseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
