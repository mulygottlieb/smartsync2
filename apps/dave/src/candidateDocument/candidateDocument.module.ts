import { Module } from "@nestjs/common";
import { CandidateDocumentModuleBase } from "./base/candidateDocument.module.base";
import { CandidateDocumentService } from "./candidateDocument.service";
import { CandidateDocumentController } from "./candidateDocument.controller";
import { CandidateDocumentResolver } from "./candidateDocument.resolver";

@Module({
  imports: [CandidateDocumentModuleBase],
  controllers: [CandidateDocumentController],
  providers: [CandidateDocumentService, CandidateDocumentResolver],
  exports: [CandidateDocumentService],
})
export class CandidateDocumentModule {}
