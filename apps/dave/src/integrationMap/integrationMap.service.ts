import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationMapServiceBase } from "./base/integrationMap.service.base";

@Injectable()
export class IntegrationMapService extends IntegrationMapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
