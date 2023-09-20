import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeSettingServiceBase } from "./base/employeeSetting.service.base";

@Injectable()
export class EmployeeSettingService extends EmployeeSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
