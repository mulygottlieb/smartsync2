import { Module } from "@nestjs/common";
import { CandidateInterviewerModuleBase } from "./base/candidateInterviewer.module.base";
import { CandidateInterviewerService } from "./candidateInterviewer.service";
import { CandidateInterviewerController } from "./candidateInterviewer.controller";
import { CandidateInterviewerResolver } from "./candidateInterviewer.resolver";

@Module({
  imports: [CandidateInterviewerModuleBase],
  controllers: [CandidateInterviewerController],
  providers: [CandidateInterviewerService, CandidateInterviewerResolver],
  exports: [CandidateInterviewerService],
})
export class CandidateInterviewerModule {}
