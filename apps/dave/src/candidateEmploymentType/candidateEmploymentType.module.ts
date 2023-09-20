import { Module } from "@nestjs/common";
import { CandidateEmploymentTypeModuleBase } from "./base/candidateEmploymentType.module.base";
import { CandidateEmploymentTypeService } from "./candidateEmploymentType.service";
import { CandidateEmploymentTypeController } from "./candidateEmploymentType.controller";
import { CandidateEmploymentTypeResolver } from "./candidateEmploymentType.resolver";

@Module({
  imports: [CandidateEmploymentTypeModuleBase],
  controllers: [CandidateEmploymentTypeController],
  providers: [CandidateEmploymentTypeService, CandidateEmploymentTypeResolver],
  exports: [CandidateEmploymentTypeService],
})
export class CandidateEmploymentTypeModule {}
