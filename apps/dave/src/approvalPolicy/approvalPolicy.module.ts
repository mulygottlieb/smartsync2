import { Module } from "@nestjs/common";
import { ApprovalPolicyModuleBase } from "./base/approvalPolicy.module.base";
import { ApprovalPolicyService } from "./approvalPolicy.service";
import { ApprovalPolicyController } from "./approvalPolicy.controller";
import { ApprovalPolicyResolver } from "./approvalPolicy.resolver";

@Module({
  imports: [ApprovalPolicyModuleBase],
  controllers: [ApprovalPolicyController],
  providers: [ApprovalPolicyService, ApprovalPolicyResolver],
  exports: [ApprovalPolicyService],
})
export class ApprovalPolicyModule {}
