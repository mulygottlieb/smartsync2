import { Module } from "@nestjs/common";
import { CandidateExperienceModuleBase } from "./base/candidateExperience.module.base";
import { CandidateExperienceService } from "./candidateExperience.service";
import { CandidateExperienceController } from "./candidateExperience.controller";
import { CandidateExperienceResolver } from "./candidateExperience.resolver";

@Module({
  imports: [CandidateExperienceModuleBase],
  controllers: [CandidateExperienceController],
  providers: [CandidateExperienceService, CandidateExperienceResolver],
  exports: [CandidateExperienceService],
})
export class CandidateExperienceModule {}
