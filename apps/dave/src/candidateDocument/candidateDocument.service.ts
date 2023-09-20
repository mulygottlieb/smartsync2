import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CandidateDocumentServiceBase } from "./base/candidateDocument.service.base";

@Injectable()
export class CandidateDocumentService extends CandidateDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
