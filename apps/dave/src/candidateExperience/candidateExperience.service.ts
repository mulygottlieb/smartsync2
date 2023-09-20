import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateExperienceServiceBase } from "./base/candidateExperience.service.base";

@Injectable()
export class CandidateExperienceService extends CandidateExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
