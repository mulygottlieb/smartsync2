import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationLanguageServiceBase } from "./base/organizationLanguage.service.base";

@Injectable()
export class OrganizationLanguageService extends OrganizationLanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
