import { Module } from "@nestjs/common";
import { CandidateFeedbackModuleBase } from "./base/candidateFeedback.module.base";
import { CandidateFeedbackService } from "./candidateFeedback.service";
import { CandidateFeedbackController } from "./candidateFeedback.controller";
import { CandidateFeedbackResolver } from "./candidateFeedback.resolver";

@Module({
  imports: [CandidateFeedbackModuleBase],
  controllers: [CandidateFeedbackController],
  providers: [CandidateFeedbackService, CandidateFeedbackResolver],
  exports: [CandidateFeedbackService],
})
export class CandidateFeedbackModule {}
