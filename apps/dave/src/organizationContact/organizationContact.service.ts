import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationContactServiceBase } from "./base/organizationContact.service.base";

@Injectable()
export class OrganizationContactService extends OrganizationContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
