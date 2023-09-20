import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationPositionServiceBase } from "./base/tagOrganizationPosition.service.base";

@Injectable()
export class TagOrganizationPositionService extends TagOrganizationPositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
