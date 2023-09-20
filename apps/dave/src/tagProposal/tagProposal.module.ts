import { Module } from "@nestjs/common";
import { TagProposalModuleBase } from "./base/tagProposal.module.base";
import { TagProposalService } from "./tagProposal.service";
import { TagProposalController } from "./tagProposal.controller";
import { TagProposalResolver } from "./tagProposal.resolver";

@Module({
  imports: [TagProposalModuleBase],
  controllers: [TagProposalController],
  providers: [TagProposalService, TagProposalResolver],
  exports: [TagProposalService],
})
export class TagProposalModule {}
