import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TagEmployeeLevelServiceBase } from "./base/tagEmployeeLevel.service.base";

@Injectable()
export class TagEmployeeLevelService extends TagEmployeeLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
