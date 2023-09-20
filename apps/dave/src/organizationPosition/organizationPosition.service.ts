import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationPositionServiceBase } from "./base/organizationPosition.service.base";

@Injectable()
export class OrganizationPositionService extends OrganizationPositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
