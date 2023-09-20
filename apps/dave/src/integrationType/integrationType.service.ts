import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationTypeServiceBase } from "./base/integrationType.service.base";

@Injectable()
export class IntegrationTypeService extends IntegrationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
