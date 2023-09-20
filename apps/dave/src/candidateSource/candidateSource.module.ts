import { Module } from "@nestjs/common";
import { CandidateSourceModuleBase } from "./base/candidateSource.module.base";
import { CandidateSourceService } from "./candidateSource.service";
import { CandidateSourceController } from "./candidateSource.controller";
import { CandidateSourceResolver } from "./candidateSource.resolver";

@Module({
  imports: [CandidateSourceModuleBase],
  controllers: [CandidateSourceController],
  providers: [CandidateSourceService, CandidateSourceResolver],
  exports: [CandidateSourceService],
})
export class CandidateSourceModule {}
