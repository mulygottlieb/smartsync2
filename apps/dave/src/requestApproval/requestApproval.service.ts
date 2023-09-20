import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RequestApprovalServiceBase } from "./base/requestApproval.service.base";

@Injectable()
export class RequestApprovalService extends RequestApprovalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
