import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidatePersonalQualityServiceBase } from "./base/candidatePersonalQuality.service.base";

@Injectable()
export class CandidatePersonalQualityService extends CandidatePersonalQualityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
