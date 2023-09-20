import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationTeamTasksTaskServiceBase } from "./base/organizationTeamTasksTask.service.base";

@Injectable()
export class OrganizationTeamTasksTaskService extends OrganizationTeamTasksTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
