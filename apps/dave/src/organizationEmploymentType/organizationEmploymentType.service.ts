import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationEmploymentTypeServiceBase } from "./base/organizationEmploymentType.service.base";

@Injectable()
export class OrganizationEmploymentTypeService extends OrganizationEmploymentTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
