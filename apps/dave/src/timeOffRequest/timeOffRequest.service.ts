import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeOffRequestServiceBase } from "./base/timeOffRequest.service.base";

@Injectable()
export class TimeOffRequestService extends TimeOffRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
