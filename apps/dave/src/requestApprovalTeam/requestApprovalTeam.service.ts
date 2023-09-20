import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RequestApprovalTeamServiceBase } from "./base/requestApprovalTeam.service.base";

@Injectable()
export class RequestApprovalTeamService extends RequestApprovalTeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
