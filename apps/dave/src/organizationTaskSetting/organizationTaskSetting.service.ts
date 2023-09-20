import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationTaskSettingServiceBase } from "./base/organizationTaskSetting.service.base";

@Injectable()
export class OrganizationTaskSettingService extends OrganizationTaskSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
