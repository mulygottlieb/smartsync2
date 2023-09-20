import { Module } from "@nestjs/common";
import { CandidateSkillModuleBase } from "./base/candidateSkill.module.base";
import { CandidateSkillService } from "./candidateSkill.service";
import { CandidateSkillController } from "./candidateSkill.controller";
import { CandidateSkillResolver } from "./candidateSkill.resolver";

@Module({
  imports: [CandidateSkillModuleBase],
  controllers: [CandidateSkillController],
  providers: [CandidateSkillService, CandidateSkillResolver],
  exports: [CandidateSkillService],
})
export class CandidateSkillModule {}
