import { Module } from "@nestjs/common";
import { CandidatePersonalQualityModuleBase } from "./base/candidatePersonalQuality.module.base";
import { CandidatePersonalQualityService } from "./candidatePersonalQuality.service";
import { CandidatePersonalQualityController } from "./candidatePersonalQuality.controller";
import { CandidatePersonalQualityResolver } from "./candidatePersonalQuality.resolver";

@Module({
  imports: [CandidatePersonalQualityModuleBase],
  controllers: [CandidatePersonalQualityController],
  providers: [
    CandidatePersonalQualityService,
    CandidatePersonalQualityResolver,
  ],
  exports: [CandidatePersonalQualityService],
})
export class CandidatePersonalQualityModule {}
