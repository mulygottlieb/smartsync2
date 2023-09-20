import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagIntegrationServiceBase } from "./base/tagIntegration.service.base";

@Injectable()
export class TagIntegrationService extends TagIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
