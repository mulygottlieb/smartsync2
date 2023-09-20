import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationProjectServiceBase } from "./base/tagOrganizationProject.service.base";

@Injectable()
export class TagOrganizationProjectService extends TagOrganizationProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
