import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationEntitySettingServiceBase } from "./base/integrationEntitySetting.service.base";

@Injectable()
export class IntegrationEntitySettingService extends IntegrationEntitySettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
