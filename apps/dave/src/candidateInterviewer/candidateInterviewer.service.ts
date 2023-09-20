import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateInterviewerServiceBase } from "./base/candidateInterviewer.service.base";

@Injectable()
export class CandidateInterviewerService extends CandidateInterviewerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
