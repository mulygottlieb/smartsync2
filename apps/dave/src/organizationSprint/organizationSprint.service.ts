import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationSprintServiceBase } from "./base/organizationSprint.service.base";

@Injectable()
export class OrganizationSprintService extends OrganizationSprintServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
