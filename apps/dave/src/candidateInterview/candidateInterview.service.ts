import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateInterviewServiceBase } from "./base/candidateInterview.service.base";

@Injectable()
export class CandidateInterviewService extends CandidateInterviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
