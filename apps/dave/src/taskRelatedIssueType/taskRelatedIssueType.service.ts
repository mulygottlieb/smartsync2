import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskRelatedIssueTypeServiceBase } from "./base/taskRelatedIssueType.service.base";

@Injectable()
export class TaskRelatedIssueTypeService extends TaskRelatedIssueTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
