import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagExpenseServiceBase } from "./base/tagExpense.service.base";

@Injectable()
export class TagExpenseService extends TagExpenseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
