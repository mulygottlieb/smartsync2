import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeOffRequestEmployeeServiceBase } from "./base/timeOffRequestEmployee.service.base";

@Injectable()
export class TimeOffRequestEmployeeService extends TimeOffRequestEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
