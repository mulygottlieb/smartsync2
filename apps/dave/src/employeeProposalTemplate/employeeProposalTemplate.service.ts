import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeProposalTemplateServiceBase } from "./base/employeeProposalTemplate.service.base";

@Injectable()
export class EmployeeProposalTemplateService extends EmployeeProposalTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
