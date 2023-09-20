import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationTeamServiceBase } from "./base/organizationTeam.service.base";

@Injectable()
export class OrganizationTeamService extends OrganizationTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
