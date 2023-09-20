import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountingTemplateServiceBase } from "./base/accountingTemplate.service.base";

@Injectable()
export class AccountingTemplateService extends AccountingTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
