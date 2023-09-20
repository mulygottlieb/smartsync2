import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationTeamServiceBase } from "./base/tagOrganizationTeam.service.base";

@Injectable()
export class TagOrganizationTeamService extends TagOrganizationTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
