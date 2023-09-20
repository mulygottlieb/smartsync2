import { Module } from "@nestjs/common";
import { TaskRelatedIssueTypeModuleBase } from "./base/taskRelatedIssueType.module.base";
import { TaskRelatedIssueTypeService } from "./taskRelatedIssueType.service";
import { TaskRelatedIssueTypeController } from "./taskRelatedIssueType.controller";
import { TaskRelatedIssueTypeResolver } from "./taskRelatedIssueType.resolver";

@Module({
  imports: [TaskRelatedIssueTypeModuleBase],
  controllers: [TaskRelatedIssueTypeController],
  providers: [TaskRelatedIssueTypeService, TaskRelatedIssueTypeResolver],
  exports: [TaskRelatedIssueTypeService],
})
export class TaskRelatedIssueTypeModule {}
