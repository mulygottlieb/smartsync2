import { Module } from "@nestjs/common";
import { TaskLinkedIssueModuleBase } from "./base/taskLinkedIssue.module.base";
import { TaskLinkedIssueService } from "./taskLinkedIssue.service";
import { TaskLinkedIssueController } from "./taskLinkedIssue.controller";
import { TaskLinkedIssueResolver } from "./taskLinkedIssue.resolver";

@Module({
  imports: [TaskLinkedIssueModuleBase],
  controllers: [TaskLinkedIssueController],
  providers: [TaskLinkedIssueService, TaskLinkedIssueResolver],
  exports: [TaskLinkedIssueService],
})
export class TaskLinkedIssueModule {}
