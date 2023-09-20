import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationContactServiceBase } from "./base/tagOrganizationContact.service.base";

@Injectable()
export class TagOrganizationContactService extends TagOrganizationContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
