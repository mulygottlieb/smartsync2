import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationIntegrationTypeServiceBase } from "./base/integrationIntegrationType.service.base";

@Injectable()
export class IntegrationIntegrationTypeService extends IntegrationIntegrationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
