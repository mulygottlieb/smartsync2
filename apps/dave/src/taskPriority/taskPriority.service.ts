import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskPriorityServiceBase } from "./base/taskPriority.service.base";

@Injectable()
export class TaskPriorityService extends TaskPriorityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
