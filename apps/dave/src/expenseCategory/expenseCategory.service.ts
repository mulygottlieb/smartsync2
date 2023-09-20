import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpenseCategoryServiceBase } from "./base/expenseCategory.service.base";

@Injectable()
export class ExpenseCategoryService extends ExpenseCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
