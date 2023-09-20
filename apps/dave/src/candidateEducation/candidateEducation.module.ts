import { Module } from "@nestjs/common";
import { CandidateEducationModuleBase } from "./base/candidateEducation.module.base";
import { CandidateEducationService } from "./candidateEducation.service";
import { CandidateEducationController } from "./candidateEducation.controller";
import { CandidateEducationResolver } from "./candidateEducation.resolver";

@Module({
  imports: [CandidateEducationModuleBase],
  controllers: [CandidateEducationController],
  providers: [CandidateEducationService, CandidateEducationResolver],
  exports: [CandidateEducationService],
})
export class CandidateEducationModule {}
