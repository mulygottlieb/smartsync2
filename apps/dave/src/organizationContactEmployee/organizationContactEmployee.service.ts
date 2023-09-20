import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationContactEmployeeServiceBase } from "./base/organizationContactEmployee.service.base";

@Injectable()
export class OrganizationContactEmployeeService extends OrganizationContactEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
