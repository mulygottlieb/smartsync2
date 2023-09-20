import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeOffPolicyServiceBase } from "./base/timeOffPolicy.service.base";

@Injectable()
export class TimeOffPolicyService extends TimeOffPolicyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
