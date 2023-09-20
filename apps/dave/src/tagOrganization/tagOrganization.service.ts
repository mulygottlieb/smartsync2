import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationServiceBase } from "./base/tagOrganization.service.base";

@Injectable()
export class TagOrganizationService extends TagOrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
