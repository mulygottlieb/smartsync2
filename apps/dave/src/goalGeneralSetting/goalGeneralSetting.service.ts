import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GoalGeneralSettingServiceBase } from "./base/goalGeneralSetting.service.base";

@Injectable()
export class GoalGeneralSettingService extends GoalGeneralSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
