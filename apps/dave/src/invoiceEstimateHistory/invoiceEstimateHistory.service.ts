import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvoiceEstimateHistoryServiceBase } from "./base/invoiceEstimateHistory.service.base";

@Injectable()
export class InvoiceEstimateHistoryService extends InvoiceEstimateHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
