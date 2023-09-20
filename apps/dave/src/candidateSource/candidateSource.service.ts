import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateSourceServiceBase } from "./base/candidateSource.service.base";

@Injectable()
export class CandidateSourceService extends CandidateSourceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
