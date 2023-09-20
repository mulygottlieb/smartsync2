import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationEmploymentTypeEmployeeServiceBase } from "./base/organizationEmploymentTypeEmployee.service.base";

@Injectable()
export class OrganizationEmploymentTypeEmployeeService extends OrganizationEmploymentTypeEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
