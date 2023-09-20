import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagPaymentServiceBase } from "./base/tagPayment.service.base";

@Injectable()
export class TagPaymentService extends TagPaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
