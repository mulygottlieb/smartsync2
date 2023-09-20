import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateEducationServiceBase } from "./base/candidateEducation.service.base";

@Injectable()
export class CandidateEducationService extends CandidateEducationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
