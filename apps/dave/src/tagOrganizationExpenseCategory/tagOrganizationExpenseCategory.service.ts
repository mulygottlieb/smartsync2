import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationExpenseCategoryServiceBase } from "./base/tagOrganizationExpenseCategory.service.base";

@Injectable()
export class TagOrganizationExpenseCategoryService extends TagOrganizationExpenseCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
