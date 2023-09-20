import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagCandidateServiceBase } from "./base/tagCandidate.service.base";

@Injectable()
export class TagCandidateService extends TagCandidateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
