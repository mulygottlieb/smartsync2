import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationProjectServiceBase } from "./base/organizationProject.service.base";

@Injectable()
export class OrganizationProjectService extends OrganizationProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
