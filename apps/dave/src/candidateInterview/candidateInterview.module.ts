import { Module } from "@nestjs/common";
import { CandidateInterviewModuleBase } from "./base/candidateInterview.module.base";
import { CandidateInterviewService } from "./candidateInterview.service";
import { CandidateInterviewController } from "./candidateInterview.controller";
import { CandidateInterviewResolver } from "./candidateInterview.resolver";

@Module({
  imports: [CandidateInterviewModuleBase],
  controllers: [CandidateInterviewController],
  providers: [CandidateInterviewService, CandidateInterviewResolver],
  exports: [CandidateInterviewService],
})
export class CandidateInterviewModule {}
