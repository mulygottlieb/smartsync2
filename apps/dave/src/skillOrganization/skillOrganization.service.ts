import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SkillOrganizationServiceBase } from "./base/skillOrganization.service.base";

@Injectable()
export class SkillOrganizationService extends SkillOrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
