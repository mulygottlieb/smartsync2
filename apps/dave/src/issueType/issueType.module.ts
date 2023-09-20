import { Module } from "@nestjs/common";
import { IssueTypeModuleBase } from "./base/issueType.module.base";
import { IssueTypeService } from "./issueType.service";
import { IssueTypeController } from "./issueType.controller";
import { IssueTypeResolver } from "./issueType.resolver";

@Module({
  imports: [IssueTypeModuleBase],
  controllers: [IssueTypeController],
  providers: [IssueTypeService, IssueTypeResolver],
  exports: [IssueTypeService],
})
export class IssueTypeModule {}
