import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateEmploymentTypeServiceBase } from "./base/candidateEmploymentType.service.base";

@Injectable()
export class CandidateEmploymentTypeService extends CandidateEmploymentTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
