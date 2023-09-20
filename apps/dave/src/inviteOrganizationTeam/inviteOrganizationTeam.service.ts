import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InviteOrganizationTeamServiceBase } from "./base/inviteOrganizationTeam.service.base";

@Injectable()
export class InviteOrganizationTeamService extends InviteOrganizationTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
