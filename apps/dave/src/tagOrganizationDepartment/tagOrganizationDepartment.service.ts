import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagOrganizationDepartmentServiceBase } from "./base/tagOrganizationDepartment.service.base";

@Injectable()
export class TagOrganizationDepartmentService extends TagOrganizationDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
