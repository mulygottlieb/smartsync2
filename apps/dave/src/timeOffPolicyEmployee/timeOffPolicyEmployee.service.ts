import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeOffPolicyEmployeeServiceBase } from "./base/timeOffPolicyEmployee.service.base";

@Injectable()
export class TimeOffPolicyEmployeeService extends TimeOffPolicyEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
