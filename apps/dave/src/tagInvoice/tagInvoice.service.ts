import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagInvoiceServiceBase } from "./base/tagInvoice.service.base";

@Injectable()
export class TagInvoiceService extends TagInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
