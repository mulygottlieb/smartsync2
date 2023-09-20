import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalKpiTemplateServiceBase } from "./base/goalKpiTemplate.service.base";

@Injectable()
export class GoalKpiTemplateService extends GoalKpiTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
