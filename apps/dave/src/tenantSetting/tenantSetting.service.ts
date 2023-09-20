import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TenantSettingServiceBase } from "./base/tenantSetting.service.base";

@Injectable()
export class TenantSettingService extends TenantSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
