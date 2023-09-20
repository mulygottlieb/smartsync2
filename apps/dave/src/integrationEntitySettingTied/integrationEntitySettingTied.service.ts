import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationEntitySettingTiedServiceBase } from "./base/integrationEntitySettingTied.service.base";

@Injectable()
export class IntegrationEntitySettingTiedService extends IntegrationEntitySettingTiedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
