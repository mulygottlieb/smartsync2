import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InviteOrganizationDepartmentServiceBase } from "./base/inviteOrganizationDepartment.service.base";

@Injectable()
export class InviteOrganizationDepartmentService extends InviteOrganizationDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
