import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegrationTenantServiceBase } from "./base/integrationTenant.service.base";

@Injectable()
export class IntegrationTenantService extends IntegrationTenantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
