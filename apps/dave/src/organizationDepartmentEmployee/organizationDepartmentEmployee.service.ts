import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationDepartmentEmployeeServiceBase } from "./base/organizationDepartmentEmployee.service.base";

@Injectable()
export class OrganizationDepartmentEmployeeService extends OrganizationDepartmentEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
