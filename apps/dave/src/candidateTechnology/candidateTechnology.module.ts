import { Module } from "@nestjs/common";
import { CandidateTechnologyModuleBase } from "./base/candidateTechnology.module.base";
import { CandidateTechnologyService } from "./candidateTechnology.service";
import { CandidateTechnologyController } from "./candidateTechnology.controller";
import { CandidateTechnologyResolver } from "./candidateTechnology.resolver";

@Module({
  imports: [CandidateTechnologyModuleBase],
  controllers: [CandidateTechnologyController],
  providers: [CandidateTechnologyService, CandidateTechnologyResolver],
  exports: [CandidateTechnologyService],
})
export class CandidateTechnologyModule {}
