import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApprovalPolicyServiceBase } from "./base/approvalPolicy.service.base";

@Injectable()
export class ApprovalPolicyService extends ApprovalPolicyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
