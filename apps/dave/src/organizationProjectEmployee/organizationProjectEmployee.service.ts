import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationProjectEmployeeServiceBase } from "./base/organizationProjectEmployee.service.base";

@Injectable()
export class OrganizationProjectEmployeeService extends OrganizationProjectEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
