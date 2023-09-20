import { Module } from "@nestjs/common";
import { TagRequestApprovalModuleBase } from "./base/tagRequestApproval.module.base";
import { TagRequestApprovalService } from "./tagRequestApproval.service";
import { TagRequestApprovalController } from "./tagRequestApproval.controller";
import { TagRequestApprovalResolver } from "./tagRequestApproval.resolver";

@Module({
  imports: [TagRequestApprovalModuleBase],
  controllers: [TagRequestApprovalController],
  providers: [TagRequestApprovalService, TagRequestApprovalResolver],
  exports: [TagRequestApprovalService],
})
export class TagRequestApprovalModule {}
