import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportOrganizationServiceBase } from "./base/reportOrganization.service.base";

@Injectable()
export class ReportOrganizationService extends ReportOrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
