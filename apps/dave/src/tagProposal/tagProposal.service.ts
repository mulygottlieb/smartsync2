import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagProposalServiceBase } from "./base/tagProposal.service.base";

@Injectable()
export class TagProposalService extends TagProposalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
