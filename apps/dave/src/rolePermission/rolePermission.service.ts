import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RolePermissionServiceBase } from "./base/rolePermission.service.base";

@Injectable()
export class RolePermissionService extends RolePermissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
