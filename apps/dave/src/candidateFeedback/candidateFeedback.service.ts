import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateFeedbackServiceBase } from "./base/candidateFeedback.service.base";

@Injectable()
export class CandidateFeedbackService extends CandidateFeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
