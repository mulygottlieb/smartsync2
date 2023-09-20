import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EstimateEmailServiceBase } from "./base/estimateEmail.service.base";

@Injectable()
export class EstimateEmailService extends EstimateEmailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
