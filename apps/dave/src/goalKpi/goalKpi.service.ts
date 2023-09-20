import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalKpiServiceBase } from "./base/goalKpi.service.base";

@Injectable()
export class GoalKpiService extends GoalKpiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
