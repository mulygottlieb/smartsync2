import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagRequestApprovalServiceBase } from "./base/tagRequestApproval.service.base";

@Injectable()
export class TagRequestApprovalService extends TagRequestApprovalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
