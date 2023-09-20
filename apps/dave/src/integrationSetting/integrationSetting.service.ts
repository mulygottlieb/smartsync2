import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationSettingServiceBase } from "./base/integrationSetting.service.base";

@Injectable()
export class IntegrationSettingService extends IntegrationSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
