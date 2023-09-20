import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InviteOrganizationProjectServiceBase } from "./base/inviteOrganizationProject.service.base";

@Injectable()
export class InviteOrganizationProjectService extends InviteOrganizationProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
