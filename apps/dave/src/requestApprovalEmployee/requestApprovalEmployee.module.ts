import { Module } from "@nestjs/common";
import { RequestApprovalEmployeeModuleBase } from "./base/requestApprovalEmployee.module.base";
import { RequestApprovalEmployeeService } from "./requestApprovalEmployee.service";
import { RequestApprovalEmployeeController } from "./requestApprovalEmployee.controller";
import { RequestApprovalEmployeeResolver } from "./requestApprovalEmployee.resolver";

@Module({
  imports: [RequestApprovalEmployeeModuleBase],
  controllers: [RequestApprovalEmployeeController],
  providers: [RequestApprovalEmployeeService, RequestApprovalEmployeeResolver],
  exports: [RequestApprovalEmployeeService],
})
export class RequestApprovalEmployeeModule {}
