import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationEmploymentTypeServiceBase } from "./base/tagOrganizationEmploymentType.service.base";

@Injectable()
export class TagOrganizationEmploymentTypeService extends TagOrganizationEmploymentTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
