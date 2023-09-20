import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaskTeamServiceBase } from "./base/taskTeam.service.base";

@Injectable()
export class TaskTeamService extends TaskTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
