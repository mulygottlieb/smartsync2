import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalTemplateServiceBase } from "./base/goalTemplate.service.base";

@Injectable()
export class GoalTemplateService extends GoalTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
