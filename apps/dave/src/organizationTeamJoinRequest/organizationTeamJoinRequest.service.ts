import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationTeamJoinRequestServiceBase } from "./base/organizationTeamJoinRequest.service.base";

@Injectable()
export class OrganizationTeamJoinRequestService extends OrganizationTeamJoinRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
