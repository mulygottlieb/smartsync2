import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateSkillServiceBase } from "./base/candidateSkill.service.base";

@Injectable()
export class CandidateSkillService extends CandidateSkillServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
