import { Module } from "@nestjs/common";
import { TagCandidateModuleBase } from "./base/tagCandidate.module.base";
import { TagCandidateService } from "./tagCandidate.service";
import { TagCandidateController } from "./tagCandidate.controller";
import { TagCandidateResolver } from "./tagCandidate.resolver";

@Module({
  imports: [TagCandidateModuleBase],
  controllers: [TagCandidateController],
  providers: [TagCandidateService, TagCandidateResolver],
  exports: [TagCandidateService],
})
export class TagCandidateModule {}
