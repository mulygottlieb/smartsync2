import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationAwardServiceBase } from "./base/organizationAward.service.base";

@Injectable()
export class OrganizationAwardService extends OrganizationAwardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
