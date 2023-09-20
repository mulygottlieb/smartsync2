import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganizationDepartmentServiceBase } from "./base/organizationDepartment.service.base";

@Injectable()
export class OrganizationDepartmentService extends OrganizationDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
