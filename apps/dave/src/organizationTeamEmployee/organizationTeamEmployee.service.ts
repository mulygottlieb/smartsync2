import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationTeamEmployeeServiceBase } from "./base/organizationTeamEmployee.service.base";

@Injectable()
export class OrganizationTeamEmployeeService extends OrganizationTeamEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
