import { Module } from "@nestjs/common";
import { RequestApprovalTeamModuleBase } from "./base/requestApprovalTeam.module.base";
import { RequestApprovalTeamService } from "./requestApprovalTeam.service";
import { RequestApprovalTeamController } from "./requestApprovalTeam.controller";
import { RequestApprovalTeamResolver } from "./requestApprovalTeam.resolver";

@Module({
  imports: [RequestApprovalTeamModuleBase],
  controllers: [RequestApprovalTeamController],
  providers: [RequestApprovalTeamService, RequestApprovalTeamResolver],
  exports: [RequestApprovalTeamService],
})
export class RequestApprovalTeamModule {}
