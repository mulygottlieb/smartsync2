import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalTimeFrameServiceBase } from "./base/goalTimeFrame.service.base";

@Injectable()
export class GoalTimeFrameService extends GoalTimeFrameServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
