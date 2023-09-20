import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InviteOrganizationContactServiceBase } from "./base/inviteOrganizationContact.service.base";

@Injectable()
export class InviteOrganizationContactService extends InviteOrganizationContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
