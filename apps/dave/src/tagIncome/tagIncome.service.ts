import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagIncomeServiceBase } from "./base/tagIncome.service.base";

@Injectable()
export class TagIncomeService extends TagIncomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
