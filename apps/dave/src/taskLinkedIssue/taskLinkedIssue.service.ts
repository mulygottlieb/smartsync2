import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskLinkedIssueServiceBase } from "./base/taskLinkedIssue.service.base";

@Injectable()
export class TaskLinkedIssueService extends TaskLinkedIssueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
