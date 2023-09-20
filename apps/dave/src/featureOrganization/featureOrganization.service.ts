import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeatureOrganizationServiceBase } from "./base/featureOrganization.service.base";

@Injectable()
export class FeatureOrganizationService extends FeatureOrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
