import { Module } from "@nestjs/common";
import { RequestApprovalModuleBase } from "./base/requestApproval.module.base";
import { RequestApprovalService } from "./requestApproval.service";
import { RequestApprovalController } from "./requestApproval.controller";
import { RequestApprovalResolver } from "./requestApproval.resolver";

@Module({
  imports: [RequestApprovalModuleBase],
  controllers: [RequestApprovalController],
  providers: [RequestApprovalService, RequestApprovalResolver],
  exports: [RequestApprovalService],
})
export class RequestApprovalModule {}
